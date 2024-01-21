// src/components/CustomOrderForm.tsx

import React, { useState } from 'react';

const CustomOrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    // Votre fonction de soumission...
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg" style={{
      backgroundImage: `url('/images/Bg_Form.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fond blanc semi-transparent
      backdropFilter: 'blur(10px)', // Flou d'arrière-plan
    }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champs du formulaire avec un fond transparent */}
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white "  style={{
    textShadow: '2px 2px 1px rgba(1, 1, 1, 1)',
  }}>Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-white" style={{
    textShadow: '2px 2px 1px rgba(1, 1, 1, 1)',
  }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium text-white " style={{
    textShadow: '2px 2px 1px rgba(1, 1, 1, 1)',
  }}>Description du design</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            autoComplete="off"
            className="w-7/12 mt-1 block  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="file" className="text-sm font-medium text-white " style={{
    textShadow: '2px 2px 1px rgba(1, 1, 1, 1)',
  }}>Fichier de design (optionnel)</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block "
          />
        </div>
        <div className="flex justify-end"> {/* Cette classe aligne les éléments enfants à droite */}
  <button
    type="submit"
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    style={{ textShadow: '2px 2px 1px rgba(1, 1, 1, 1)' }}
  >
    Envoyer
  </button>
</div>

      </form>
    </div>
  );
};

export default CustomOrderForm;
