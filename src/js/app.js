import { index } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    index()
});
require('dotenv').config()

const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Now you initialize the Supabase client using the keys from process.env
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test Code (Add this right after require('dotenv').config();)
console.log('URL Loaded:', process.env.SUPABASE_URL);
console.log('Anon Key Loaded:', process.env.SUPABASE_ANON_KEY ? 'YES' : 'NO');
// Run: node index.js