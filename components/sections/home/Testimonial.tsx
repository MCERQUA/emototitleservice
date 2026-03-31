export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial card */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 shadow-lg space-y-6">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined filled text-amber-400 text-2xl"
                >
                  star
                </span>
              ))}
            </div>

            <blockquote className="text-lg md:text-xl leading-relaxed text-on-surface italic">
              &ldquo;I was dreading the paperwork for my Sur-Ron. eMotoTitle took
              care of everything in under 15 minutes. Professional, fast, and
              totally worth it.&rdquo;
            </blockquote>

            <div className="flex items-center gap-4 pt-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA39txyJywiokOB-83eENra9yYsuEKGhlaFSZNSx_Ice8sDSj7QgKPexAn6dvr9R7UuJgp93FkJjWNYwDUglAszgrF4DE9fLtfIS4_H-gWaveOXV7SJ3T0h8FJlwsLpiVB-U55ypE0SD846s8ZAAxnNFadyvXC3X6GGVEMXAyC1Ru2a1-MMSGAvQs0PdFfX_wQdcUEP2XLRXT9DacmqxII9Ycx5fRbMouRc1da2knyDeWtv2xMkzPReKK11-Wt-Rob1je8OD4B8YoW"
                alt="Marcus Chen"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-headline font-bold text-on-surface">
                  Marcus Chen
                </p>
                <p className="text-sm text-on-surface-variant">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          {/* Stats column */}
          <div className="space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
              Join 5,000+ Legal Riders
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm text-center space-y-2">
                <p className="font-headline text-4xl font-extrabold text-primary">
                  99%
                </p>
                <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Success Rate
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm text-center space-y-2">
                <p className="font-headline text-4xl font-extrabold text-primary">
                  15m
                </p>
                <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Avg. Filing Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
