import { Router, type IRouter } from "express";
import { db, waitlistTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/waitlist — submit interest
router.post("/waitlist", async (req, res) => {
  const { name, email, note = "" } = req.body ?? {};

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    res.status(400).json({ error: "Name is required." });
    return;
  }
  if (name.trim().length > 100) {
    res.status(400).json({ error: "Name is too long." });
    return;
  }
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    res.status(400).json({ error: "A valid email address is required." });
    return;
  }
  if (email.trim().length > 200) {
    res.status(400).json({ error: "Email is too long." });
    return;
  }
  if (typeof note === "string" && note.length > 500) {
    res.status(400).json({ error: "Note is too long (max 500 characters)." });
    return;
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim();
  const cleanNote = typeof note === "string" ? note.trim() : "";

  try {
    await db.insert(waitlistTable).values({
      name: cleanName,
      email: cleanEmail,
      note: cleanNote,
    });

    const [{ count }] = await db.$count(waitlistTable).then
      ? [{ count: await db.$count(waitlistTable) }]
      : [{ count: 0 }];

    res.status(201).json({
      message: "You're on the list! We'll be in touch.",
      count,
    });
  } catch (err: any) {
    // Unique constraint violation → duplicate email
    if (err?.code === "23505") {
      res.status(409).json({ error: "This email is already on the waitlist." });
      return;
    }
    throw err;
  }
});

// GET /api/waitlist/count — public count
router.get("/waitlist/count", async (_req, res) => {
  const count = await db.$count(waitlistTable);
  res.json({ count });
});

// GET /api/waitlist — internal list (all submissions)
router.get("/waitlist", async (_req, res) => {
  const rows = await db
    .select()
    .from(waitlistTable)
    .orderBy(waitlistTable.submittedAt);
  res.json({ count: rows.length, submissions: rows });
});

export default router;
