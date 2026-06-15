export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Email Support Card */}
      <div className="bg-surface-container-low rounded-[2rem] p-8 hover:bg-surface-container transition-colors duration-300">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm mb-5">
          <span className="material-symbols-outlined text-primary text-3xl">
            mail
          </span>
        </div>
        <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
          Email Support
        </h3>
        <p className="text-on-surface-variant leading-relaxed mb-4">
          Expect a response within 24 hours from our concierge team.
        </p>
        <a
          href="mailto:support@emototitleservice.com"
          className="text-primary font-bold text-lg hover:underline"
        >
          support@emototitleservice.com
        </a>
      </div>

      {/* Business Address Card */}
      <div className="bg-surface-container-high rounded-[2rem] p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm mb-5">
          <span className="material-symbols-outlined text-primary text-3xl">
            location_on
          </span>
        </div>
        <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
          Business Address
        </h3>
        <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
          {'eMotoTitle Service Center\n88 Electric Avenue, Suite 400\nAustin, TX 78701'}
        </p>
      </div>

      {/* Office Image Card */}
      <div className="group relative h-64 rounded-[2rem] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD91bYPfje1vpCPOm9SmPUuoPOKQAh_YyOWxSKXsx43APKydvq5eBZAMldyfr7-aCguNZ8fUj8YkbD373wB_Sw93BQZXhAV9v6yKd9Ec1qKf2fUf2kNY3YbnxMr8DdUqxkEz3-GuHnmdVmY8jLAUycFhfcUt7xvjmZX9Oe0wcd84vdDr6NezJQPg22vGI-bu_dgdRVcycDxUSZwBA6KcVvzddY2Dui2lKtI1552AYUIeknLpLCNFssO_xYI3SKX5Vn5xNFi0x9WLvB0"
          alt="eMotoTitle Service Headquarters"
          className="h-full w-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-700"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

        {/* Label overlay */}
        <div className="absolute bottom-6 left-6">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-on-surface text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            Global Headquarters
          </span>
          <p className="text-white font-headline font-bold text-lg drop-shadow-lg">
            Austin, Texas - USA
          </p>
        </div>
      </div>
    </div>
  )
}
