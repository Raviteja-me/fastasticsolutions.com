import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Bot } from 'lucide-react';

interface ContactOption {
  icon: typeof Mail;
  title: string;
  value: string;
  link: string;
}

const contactOptions: ContactOption[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'fastasticsolutions@gmail.com',
    link: 'mailto:fastasticsolutions@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 7483092794',
    link: 'tel:+917483092794'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 7483092794',
    link: 'https://wa.me/917483092794'
  },
  {
    icon: Bot,
    title: 'AI Support',
    value: '+34 934823892',
    link: 'tel:+34934823892'
  }
];

export const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
      {contactOptions.map((option) => (
        <motion.a
          key={option.title}
          href={option.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 md:p-6 bg-[#110029] rounded-lg hover:bg-[#1a0040] transition-colors group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            <option.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-500 group-hover:text-purple-400" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{option.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{option.value}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};