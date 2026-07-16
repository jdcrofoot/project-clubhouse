import { Router, type IRouter } from "express";

const router: IRouter = Router();

// In-memory store for waitlist submissions
const submissions: Array<{
  name: string;
  email: string;
  note: string;
  submittedAt: string;
}> = [];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/waitlist — submit interest
router.post("/waitlist", (req, res) => {
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

  // Reject duplicate emails
  if (submissions.some((s) => s.email === cleanEmail)) {
    res.status(409).json({ error: "This email is already on the waitlist." });
    return;
  }

  submissions.push({
    name: cleanName,
    email: cleanEmail,
    note: cleanNote,
    submittedAt: new Date().toISOString(),
  });

  res.status(201).json({
    message: "You're on the list! We'll be in touch.",
    count: submissions.length,
  });
});

// GET /api/waitlist/count — internal count
router.get("/waitlist/count", (_req, res) => {
  res.json({ count: submissions.length });
});

export default router;
