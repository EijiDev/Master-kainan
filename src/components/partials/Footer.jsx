function Footer() {
  return (
    <footer className="py-8 text-white bg-gradient-to-r from-slate-700 to-slate-800">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <p className="text-sm text-slate-300">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
