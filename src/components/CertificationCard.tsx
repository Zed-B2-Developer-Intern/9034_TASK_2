import React from 'react';

type Props = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

const CertificationCard = ({ title, issuer, date, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{issuer}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </a>
  );
};

export default CertificationCard;
