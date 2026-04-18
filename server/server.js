const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Init Supabase Service Role (pour bypasser les RLS côté serveur si nécessaire)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Exemple de route : Réception d'une candidature bénévole
app.post('/api/volunteers', async (req, res) => {
  const { fullName, email, phone } = req.body;
  
  // 1. Sauvegarde dans Supabase
  const { data, error } = await supabase
    .from('volunteers')
    .insert([{ full_name: fullName, email, phone }]);
    
  if (error) return res.status(400).json({ error: error.message });

  // 2. (Optionnel) Logique d'envoi d'email via un service comme Resend/Nodemailer ici
  
  res.status(200).json({ message: "Candidature reçue avec succès", data });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));