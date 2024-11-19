export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-neutral-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-500 mb-4">Physical</h3>
            <ul className="space-y-2 text-neutral-200">
              <li>Weight: 180g</li>
              <li>Length: 20cm</li>
              <li>Diameter: 3cm</li>
              <li>Ergonomic grip design</li>
            </ul>
          </div>
          <div className="bg-neutral-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-500 mb-4">Performance</h3>
            <ul className="space-y-2 text-neutral-200">
              <li>Battery: 1500mAh Li-ion</li>
              <li>Motor: 12,000 RPM max</li>
              <li>Charging time: 2 hours</li>
              <li>USB-C charging port</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}