export default function Terminal() {
  const lines = [
    {
      cmd: "whoami",
      output: ["Yash Khandelwal", "Web Developer", "Content Creator"],
    },
    {
      cmd: "pwd",
      output: ["/home/portfolio"],
    },
    {
      cmd: "ls -la",
      output: [
        "drwxr-xr-x projects/",
        "drwxr-xr-x about/",
        "drwxr-xr-x contact/",
        "-rw-r--r-- skills.txt",
      ],
    },
    {
      cmd: "cat skills.txt",
      output: [
        "React • Express.js",
        "Node.js • MongoDB • TypeScript",
        "Prisma • PostgreSQL • Next.js",
      ],
    },
  ];

  return (
    <div className="hidden lg:block w-full max-w-md">
      <div className="relative">
        {/* Subtle offset detail */}
        <div className="absolute -right-2 -bottom-2 w-full h-full border border-border opacity-40" />

        {/* Terminal */}
        <div className="relative bg-[#111111] border border-border overflow-hidden shadow-[8px_12px_30px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#161616]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent opacity-80" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
            </div>

            <span className="text-xs font-mono text-muted tracking-wide">
              yash@portfolio
            </span>

            <span className="text-[10px] font-mono text-border">TERMINAL</span>
          </div>

          {/* Body */}
          <div className="p-6 font-mono text-sm space-y-5">
            {lines.map(({ cmd, output }, i) => (
              <div key={i} className="space-y-1.5">
                {/* Command */}
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>

                  <span className="text-text">{cmd}</span>
                </div>

                {/* Output */}
                <div className="ml-5 space-y-0.5 text-muted">
                  {output.map((line, j) => (
                    <div key={j}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Cursor */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-accent">$</span>

              <span className="w-2 h-4 bg-accent animate-pulse opacity-70" />
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-2.5 border-t border-border bg-[#0d0d0d] flex items-center justify-between">
            <span className="text-[10px] font-mono text-border">bash</span>

            <span className="text-[10px] font-mono text-border">UTF-8</span>

            <span className="text-[10px] font-mono text-border">
              ~/portfolio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
