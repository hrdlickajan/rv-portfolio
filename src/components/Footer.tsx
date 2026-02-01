
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 to-amber-50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-orange-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Romana Vítková. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
