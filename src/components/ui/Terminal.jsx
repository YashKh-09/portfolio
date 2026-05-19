export default function Terminal() {
  const lines = [
    {
      cmd: "whoami",
      output: ["Yash Khandelwal", "Web Developer", "Content Creator"],
    },
    { cmd: "pwd", output: ["/home/portfolio"] },
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
        "Node.js • MongoDB • Responsive Design",
      ],
    },
  ];

  return (
    <div className="hidden lg:block w-full max-w-md">
      <div className="bg-linear-to-br from-gray-900 to-gray-950 rounded-xl shadow-[10px_20px_40px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm font-mono text-gray-400">
            terminal@portfolio:~$
          </span>
          <div className="w-16" />
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-sm space-y-4">
          {lines.map(({ cmd, output }, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-cyan-300">{cmd}</span>
              </div>
              <div className="text-gray-400 ml-5 space-y-0.5">
                {output.map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Cursor */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-400">$</span>
            <span className="text-cyan-300 animate-pulse">_</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-700 text-xs text-gray-600 flex justify-between">
          <span>vim</span>
          <span>UTF-8</span>
          <span>bash</span>
        </div>
      </div>
    </div>
  );
}
