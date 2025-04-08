'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // adjust duration to match perceived load time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="loader">Loading...</div>
    </div>
  ) : null;
}
