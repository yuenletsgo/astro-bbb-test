import React, { useState } from 'react';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className='pl-2'>
      <h3>{greeting}! Thank you for visiting!</h3>
      <div className='relative bg-slate-900 dark:bg-neutral-50 text-neutral-50 dark:text-slate-900 w-fit mt-6 px-4 py-2 rounded select-none cursor-pointer hover:opacity-90' onClick={() => setGreeting(randomMessage())}>
        New Greeting
        {/* <span class="absolute -right-1 -top-1 flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-400"></span>
        </span> */}
      </div>
    </div>
  );
}