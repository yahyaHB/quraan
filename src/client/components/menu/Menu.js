import React, { Component } from 'react';

const souarNames = [
  '\'Abasa',
  'AL-\'Alaq',
  'Ad-Duhaa',
  'Ad-Dukhan',
  'Adh-Dhariyat',
  'Al-\'Adiyat',
  'Al-\'Ankabut',
  'Al-\'Asr',
  'Al-A\'la',
  'Al-A\'raf',
  'Al-Ahqaf',
  'Al-Ahzab',
  'Al-An\'am',
  'Al-Anbya',
  'Al-Anfal',
  'Al-Balad',
  'Al-Baqarah',
  'Al-Bayyinah',
  'Al-Buruj',
  'Al-Fajr',
  'Al-Falaq',
  'Al-Fath',
  'Al-Fil',
  'Al-Furqan',
  'Al-Ghashiyah',
  'Al-Hadid',
  'Al-Haj',
  'Al-Haqqah',
  'Al-Hashr',
  'Al-Hijr',
  'Al-Hujurat',
  'Al-Humazah',
  'Al-Ikhlas',
  'Al-Infitar',
  'Al-Insan',
  'Al-Inshiqaq',
  'Al-Isra',
  'Al-Jathiyah',
  'Al-Jinn',
  'Al-Jumu\'ah',
  'Al-Kafirun',
  'Al-Kahf',
  'Al-Kawthar',
  'Al-Layl',
  'Al-Ma\'arij',
  'Al-Ma\'idah',
  'Al-Ma\'un',
  'Al-Masad',
  'Al-Mu\'minun',
  'Al-Muddaththir',
  'Al-Mujadila',
  'Al-Mulk',
  'Al-Mumtahanah',
  'Al-Munafiqun',
  'Al-Mursalat',
  'Al-Mutaffifin',
  'Al-Muzzammil',
  'Al-Qadr',
  'Al-Qalam',
  'Al-Qamar',
  'Al-Qari\'ah',
  'Al-Qasas',
  'Al-Qiyamah',
  'Al-Waqi\'ah',
  'Ali \'Imran',
  'An-Naba',
  'An-Nahl',
  'An-Najm',
  'An-Naml',
  'An-Nas',
  'An-Nasr',
  'An-Nazi\'at',
  'An-Nisa',
  'An-Nur',
  'Ar-Ra\'d',
  'Ar-Rahman',
  'Ar-Rum',
  'As-Saf',
  'As-Saffat',
  'As-Sajdah',
  'Ash-Shams',
  'Ash-Sharh',
  'Ash-Shu\'ara',
  'Ash-Shuraa',
  'At-Taghabun',
  'At-Tahrim',
  'At-Takathur',
  'At-Takwir',
  'At-Talaq',
  'At-Tariq',
  'At-Tawbah',
  'At-Tin',
  'At-Tur',
  'Az-Zalzalah',
  'Az-Zukhruf',
  'Az-Zumar',
  'Fatir',
  'Fussilat',
  'Ghafir',
  'Hud',
  'Ibrahim',
  'Khatma',
  'Luqman',
  'Maryam',
  'Muhammad',
  'Nuh',
  'Qaf',
  'Quraysh',
  'Saba',
  'Sad',
  'Taha',
  'Ya-Sin',
  'Yunus',
  'Yusuf'
];

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='menu-1'>
          <div className='list-menu'>
            <ul>
              {
                souarNames.map(i => {
                  return (<li key={i}>
                    <div className='list-box'>
                      <div className='list-number-box'>1</div>
                      <a href='#'>
                        <span className='span-right-list'>{i}</span>
                      </a>
                    </div>
                    <div className='clearfix'></div>
                  </li>);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
