export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose Service',
      description:
        'Select your state and registration tier. We support all 50 states with tailored guidance for each.',
      color: 'bg-primary text-on-primary',
    },
    {
      number: 2,
      title: 'Submit Info',
      description:
        'Upload photos of your bill of sale, VIN, and ID. Our system verifies everything instantly.',
      color: 'bg-primary text-on-primary',
    },
    {
      number: 3,
      title: 'Receive Title',
      description:
        'Your official title and registration arrives by mail. Track progress in real-time from your dashboard.',
      color: 'bg-gray-300 text-gray-700',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-surface-container-low">
      <div className="container-site">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
            Three Steps to Freedom
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Hidden progress bar between circles on md+ */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-1 bg-gray-200 rounded-full z-0">
            <div className="h-full w-2/3 bg-primary rounded-full" />
          </div>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center space-y-5"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full font-headline text-xl font-bold ${step.color} shadow-md`}
              >
                {step.number}
              </div>

              <h3 className="font-headline text-xl font-bold text-on-surface">
                {step.title}
              </h3>

              <p className="text-on-surface-variant leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
