export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-8 text-center mt-16">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jacob Kazadi Kayembe. 
          Strategic AI Integration &bull; Digital Transformation &bull; Systems Innovation
        </p>
      </div>
    </footer>
  );
}
