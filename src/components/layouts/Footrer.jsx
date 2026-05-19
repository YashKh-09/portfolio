export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted order-2 sm:order-1">
            &copy; {currentYear} Yash Khandelwal
          </p>
          <p className="text-xs text-muted italic order-1 sm:order-2">
            Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}