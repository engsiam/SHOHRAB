import Link from 'next/link';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-16 mt-32 bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-3xl font-black tracking-tighter text-white uppercase font-['Space_Grotesk']">SHOHRAB</div>
          <div className="flex gap-8 items-center">
            <a className="text-slate-500 hover:text-white transition-colors" href="https://github.com/engsiam" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a className="text-slate-500 hover:text-white transition-colors" href="https://www.linkedin.com/in/md-shohrab-hossain-14745133/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a className="text-slate-500 hover:text-white transition-colors" href="https://shohrab.dev" target="_blank" rel="noopener noreferrer">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <div className="text-[10px] tracking-widest uppercase font-bold text-slate-500">© {new Date().getFullYear()} MD. SHOHRAB HOSSAIN. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold text-slate-500">
            <a className="hover:text-primary-fixed transition-colors" href="#home">Back to top</a>
            <a className="hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
