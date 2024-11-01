'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/', label: 'home' },
  { path: '/work', label: 'work' },
  { path: '/projects', label: 'projects' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-8">
      <nav>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm ${pathname === item.path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
} 