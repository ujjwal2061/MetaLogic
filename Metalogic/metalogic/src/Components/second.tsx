interface List {
  title: string;
  des: string;
}

const whymetalogic: List[] = [
  {
    title: "Innovation at the Core",
    des: `We thrive on innovation and continuously explore the latest technologies to provide you with
          groundbreaking solutions that keep you ahead of the curve.`,
  },
  {
    title: "Collaboration is the Key",
    des: `We work closely with you to understand your goals, challenges, and aspirations, ensuring our
          solutions align perfectly with your business objectives.`,
  },
  {
    title: "Your Success, Our Purpose",
    des: `Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving
          you a competitive edge in your industry.`,
  },
];

const Second = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#011C3A] to-[#003B7A] px-4">
      <div className="max-w-3xl shadow-xl bg-[#0C2B54] bg-opacity-30 backdrop-blur-md text-white rounded-xl border border-white border-opacity-10 p-6 md:p-10 space-y-5">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Why MetaLogic <span className="text-red-500 text-3xl">?</span>
        </h1>

        <p className="text-sm md:text-base">
          Innovation is our driving force. We explore the latest tech trends to deliver <br />
          groundbreaking solutions that keep you ahead.
        </p>

        <div className="space-y-4">
          {whymetalogic.map((item, index) => (
            <div key={index}>
              <h2 className="font-semibold text-lg md:text-xl">{item.title}</h2>
              <p className="text-sm md:text-base">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Second;
