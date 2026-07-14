export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-display font-black text-primary uppercase tracking-tighter">404</h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground uppercase tracking-widest font-display">
          Page Not Found
        </p>
      </div>
    </div>
  );
}
