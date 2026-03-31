export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Radmehr Akbari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
