
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/WhitePegasis' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sourav-pradhan-17124221b/' },
    { name: 'LeetCode', url: 'https://leetcode.com/whitepegasus1603/' },
    { name: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/user/whitepegasus1603/' },
    { name: 'Email', url: 'mailto:whitepegasus1603@gmail.com' }
  ];

  return (
    <footer className="py-12 text-center text-slate text-sm">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {socialLinks.map(link => (
          <a 
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="font-mono">
        <span className="hover:text-green transition-colors duration-300">
          Designed & Built by Sourav Pradhan
        </span>
      </p>
    </footer>
  );
};

export default Footer;
