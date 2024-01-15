import { useState } from 'react';

import Container from '@mui/material/Container';
import {
  Grid,
  Card,
  Table,
  Paper,
  Button,
  MenuItem,
  TableRow,
  TextField,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  CardContent,
  TableContainer,
} from '@mui/material';

// ----------------------------------------------------------------------

export default function PengisianSuaraView() {
  const [selectedParty, setSelectedParty] = useState(null);

  const calegData = {
    PKB: [{ name: 'Caleg PKB 1' }, { name: 'Caleg PKB 2' }, { name: 'Caleg PKB 3' }],
    PDI: [{ name: 'Caleg PDI 1' }, { name: 'Caleg PDI 2' }, { name: 'Caleg PDI 3' }],
    // ... tambahkan data partai dan caleg lainnya sesuai kebutuhan
  };

  const handlePartyClick = (party) => {
    setSelectedParty(party);
  };

  const [kecamatan, setKecamatan] = useState('');
  const [kelurahan, setKelurahan] = useState('');

  const dummyKecamatan = [
    { id: '1', name: 'CILEUNYI' },
    { id: '2', name: 'CIMENYAN' },
    { id: '3', name: 'CILENGKRANG' },
    { id: '4', name: 'BOJONGSOANG' },
    { id: '5', name: 'MARGAHAYU' },
    { id: '6', name: 'MARGAASIH' },
    { id: '7', name: 'KATAPANG' },
    { id: '8', name: 'DAYEUHKOLOT' },
    { id: '9', name: 'BANJARAN' },
    { id: '10', name: 'PAMEUNGPEUK' },
    { id: '11', name: 'PANGALENGAN' },
    { id: '12', name: 'ARJASARI' },
    { id: '13', name: 'CIMAUNG' },
    { id: '14', name: 'CICALENGKA' },
    { id: '15', name: 'NAGREG' },
    { id: '16', name: 'CIKANCUNG' },
    { id: '17', name: 'RANCAEKEK' },
    { id: '18', name: 'CIPARAY' },
    { id: '19', name: 'PACET' },
    { id: '20', name: 'KERTASARI' },
    { id: '21', name: 'BALEENDAH' },
    { id: '22', name: 'MAJALAYA' },
    { id: '23', name: 'SOLOKANJERUK' },
    { id: '24', name: 'PASEH' },
    { id: '25', name: 'IBUN' },
    { id: '26', name: 'SOREANG' },
    { id: '27', name: 'PASIRJAMBU' },
    { id: '28', name: 'CIWIDEY' },
    { id: '29', name: 'RANCABALI' },
    { id: '30', name: 'CANGKUANG' },
    { id: '31', name: 'KUTAWARINGIN' },
  ];

  const dummyKelurahan = [
    // Additional data for CILEUNYI
    { id: '1', name: 'Cibiru Hilir', kecamatanId: '1' },
    { id: '2', name: 'Cibiru Wetan', kecamatanId: '1' },
    { id: '3', name: 'Cileunyi Kulon', kecamatanId: '1' },
    { id: '4', name: 'Cileunyi Wetan', kecamatanId: '1' },
    { id: '5', name: 'Cimekar', kecamatanId: '1' },
    { id: '6', name: 'Cinunuk', kecamatanId: '1' },

    // Additional data for CIMENYAN
    { id: '7', name: 'Ciburial', kecamatanId: '2' },
    { id: '8', name: 'Cikadut', kecamatanId: '2' },
    { id: '9', name: 'Cimenyan', kecamatanId: '2' },
    { id: '10', name: 'Mandalamekar', kecamatanId: '2' },
    { id: '11', name: 'Mekarmanik', kecamatanId: '2' },
    { id: '12', name: 'Mekarsaluyu', kecamatanId: '2' },
    { id: '13', name: 'Sindanglaya', kecamatanId: '2' },
    { id: '14', name: 'Cibeunying', kecamatanId: '2' },
    { id: '15', name: 'Padasuka', kecamatanId: '2' },

    // Additional data for CILENGKRANG
    { id: '16', name: 'Cilengkrang', kecamatanId: '3' },
    { id: '17', name: 'Cipanjalu', kecamatanId: '3' },
    { id: '18', name: 'Ciporeat', kecamatanId: '3' },
    { id: '19', name: 'Girimekar', kecamatanId: '3' },
    { id: '20', name: 'Jatiendah', kecamatanId: '3' },
    { id: '21', name: 'Melatiwangi', kecamatanId: '3' },

    // Additional data for BOJONGSOANG
    { id: '22', name: 'Bojongsari', kecamatanId: '4' },
    { id: '23', name: 'Bojongsoang', kecamatanId: '4' },
    { id: '24', name: 'Buahbatu', kecamatanId: '4' },
    { id: '25', name: 'Cipagalo', kecamatanId: '4' },
    { id: '26', name: 'Lengkong', kecamatanId: '4' },
    { id: '27', name: 'Tegalluar', kecamatanId: '4' },

    // Additional data for MARGAHAYU
    { id: '28', name: 'Margahayu Selatan', kecamatanId: '5' },
    { id: '29', name: 'Margahayu Tengah', kecamatanId: '5' },
    { id: '30', name: 'Sayati', kecamatanId: '5' },
    { id: '31', name: 'Sukamenak', kecamatanId: '5' },
    { id: '32', name: 'Sulaeman', kecamatanId: '5' },

    // Additional data for MARGAASIH
    { id: '33', name: 'Cigondewah Hilir', kecamatanId: '6' },
    { id: '34', name: 'Lagadar', kecamatanId: '6' },
    { id: '35', name: 'Margaasih', kecamatanId: '6' },
    { id: '36', name: 'Mekar Rahayu', kecamatanId: '6' },
    { id: '37', name: 'Nanjung', kecamatanId: '6' },
    { id: '38', name: 'Rahayu', kecamatanId: '6' },

    // Additional data for KATAPANG
    { id: '39', name: 'Banyusari', kecamatanId: '7' },
    { id: '40', name: 'Cilampeni', kecamatanId: '7' },
    { id: '41', name: 'Gandasari', kecamatanId: '7' },
    { id: '42', name: 'Katapang', kecamatanId: '7' },
    { id: '43', name: 'Pangauban', kecamatanId: '7' },
    { id: '44', name: 'Sangkanhurip', kecamatanId: '7' },
    { id: '45', name: 'Sukamukti', kecamatanId: '7' },

    // Additional data for DAYEUHKOLOT
    { id: '46', name: 'Cangkuang Kulon', kecamatanId: '8' },
    { id: '47', name: 'Cangkuang Wetan', kecamatanId: '8' },
    { id: '48', name: 'Citeureup', kecamatanId: '8' },
    { id: '49', name: 'Dayeuhkolot', kecamatanId: '8' },
    { id: '50', name: 'Sukapura', kecamatanId: '8' },
    { id: '51', name: 'Pasawahan', kecamatanId: '8' },

    // Additional data for BANJARAN
    { id: '52', name: 'Banjaran', kecamatanId: '9' },
    { id: '53', name: 'Banjaran Wetan', kecamatanId: '9' },
    { id: '54', name: 'Ciapus', kecamatanId: '9' },
    { id: '55', name: 'Kamasan', kecamatanId: '9' },
    { id: '56', name: 'Kiangroke', kecamatanId: '9' },
    { id: '57', name: 'Margahurip', kecamatanId: '9' },
    { id: '58', name: 'Mekarjaya', kecamatanId: '9' },
    { id: '59', name: 'Neglasari', kecamatanId: '9' },
    { id: '60', name: 'Pasirmulya', kecamatanId: '9' },
    { id: '61', name: 'Sindangpanon', kecamatanId: '9' },
    { id: '62', name: 'Tarajusari', kecamatanId: '9' },

    // Additional data for PAMEUNGPEUK
    { id: '63', name: 'Bojongkunci', kecamatanId: '10' },
    { id: '64', name: 'Bojongmanggu', kecamatanId: '10' },
    { id: '65', name: 'Langonsari', kecamatanId: '10' },
    { id: '66', name: 'Rancamulya', kecamatanId: '10' },
    { id: '67', name: 'Rancatungku', kecamatanId: '10' },
    { id: '68', name: 'Sukasari', kecamatanId: '10' },

    // Additional data for PANGALENGAN
    { id: '69', name: 'Banjarsari', kecamatanId: '11' },
    { id: '70', name: 'Lamajang', kecamatanId: '11' },
    { id: '71', name: 'Margaluyu', kecamatanId: '11' },
    { id: '72', name: 'Margamekar', kecamatanId: '11' },
    { id: '73', name: 'Margamukti', kecamatanId: '11' },
    { id: '74', name: 'Margamulya', kecamatanId: '11' },
    { id: '75', name: 'Pangalengan', kecamatanId: '11' },
    { id: '76', name: 'Pulosari', kecamatanId: '11' },
    { id: '77', name: 'Sukaluyu', kecamatanId: '11' },
    { id: '78', name: 'Sukamanah', kecamatanId: '11' },
    { id: '79', name: 'Tribaktimulya', kecamatanId: '11' },
    { id: '80', name: 'Wanasuka', kecamatanId: '11' },
    { id: '81', name: 'Warnasari', kecamatanId: '11' },

    // Additional data for ARJASARI
    { id: '82', name: 'Ancolmekar', kecamatanId: '12' },
    { id: '83', name: 'Arjasari', kecamatanId: '12' },
    { id: '84', name: 'Baros', kecamatanId: '12' },
    { id: '85', name: 'Batukarut', kecamatanId: '12' },
    { id: '86', name: 'Lebakwangi', kecamatanId: '12' },
    { id: '87', name: 'Mangunjaya', kecamatanId: '12' },
    { id: '88', name: 'Mekarjaya', kecamatanId: '12' },
    { id: '89', name: 'Patrolsari', kecamatanId: '12' },
    { id: '90', name: 'Pinggirsari', kecamatanId: '12' },
    { id: '91', name: 'Rancakole', kecamatanId: '12' },
    { id: '92', name: 'Wargaluyu', kecamatanId: '12' },

    // Additional data for CIMAUNG
    { id: '93', name: 'Campakamulya', kecamatanId: '13' },
    { id: '94', name: 'Cikalong', kecamatanId: '13' },
    { id: '95', name: 'Cimaung', kecamatanId: '13' },
    { id: '96', name: 'Cipinang', kecamatanId: '13' },
    { id: '97', name: 'Jagabaya', kecamatanId: '13' },
    { id: '98', name: 'Malasari', kecamatanId: '13' },
    { id: '99', name: 'Mekarsari', kecamatanId: '13' },
    { id: '100', name: 'Pasirhuni', kecamatanId: '13' },
    { id: '101', name: 'Sukamaju', kecamatanId: '13' },
    { id: '102', name: 'Warjabakti', kecamatanId: '13' },

    // Additional data for CICALENGKA
    { id: '103', name: 'Babakan Peuteuy', kecamatanId: '14' },
    { id: '104', name: 'Cicalengka Kulon', kecamatanId: '14' },
    { id: '105', name: 'Cicalengka Wetan', kecamatanId: '14' },
    { id: '106', name: 'Cikuya', kecamatanId: '14' },
    { id: '107', name: 'Dampit', kecamatanId: '14' },
    { id: '108', name: 'Margaasih', kecamatanId: '14' },
    { id: '109', name: 'Nagrog', kecamatanId: '14' },
    { id: '110', name: 'Narawita', kecamatanId: '14' },
    { id: '111', name: 'Panenjoan', kecamatanId: '14' },
    { id: '112', name: 'Tanjungwangi', kecamatanId: '14' },
    { id: '113', name: 'Tenjolaya', kecamatanId: '14' },
    { id: '114', name: 'Waluya', kecamatanId: '14' },

    // Additional data for NAGREG
    { id: '115', name: 'Bojong', kecamatanId: '15' },
    { id: '116', name: 'Ciaro', kecamatanId: '15' },
    { id: '117', name: 'Ciherang', kecamatanId: '15' },
    { id: '118', name: 'Citaman', kecamatanId: '15' },
    { id: '119', name: 'Ganjarsabar', kecamatanId: '15' },
    { id: '120', name: 'Mandalawangi', kecamatanId: '15' },
    { id: '121', name: 'Nagreg', kecamatanId: '15' },
    { id: '122', name: 'Nagreg Kendan', kecamatanId: '15' },

    // Additional data for CIKANCUNG
    { id: '123', name: 'Cihanyir', kecamatanId: '16' },
    { id: '124', name: 'Cikancung', kecamatanId: '16' },
    { id: '125', name: 'Cikasungka', kecamatanId: '16' },
    { id: '126', name: 'Ciluluk', kecamatanId: '16' },
    { id: '127', name: 'Hegarmanah', kecamatanId: '16' },
    { id: '128', name: 'Mandalasari', kecamatanId: '16' },
    { id: '129', name: 'Mekarlaksana', kecamatanId: '16' },
    { id: '130', name: 'Srirahayu', kecamatanId: '16' },
    { id: '131', name: 'Tanjunglaya', kecamatanId: '16' },

    // Additional data for RANCAEKEK
    { id: '132', name: 'Bojongloa', kecamatanId: '17' },
    { id: '133', name: 'Bojongsalam', kecamatanId: '17' },
    { id: '134', name: 'Cangkuang', kecamatanId: '17' },
    { id: '135', name: 'Haurpugur', kecamatanId: '17' },
    { id: '136', name: 'Jelegong', kecamatanId: '17' },
    { id: '137', name: 'Linggar', kecamatanId: '17' },
    { id: '138', name: 'Nanjungmekar', kecamatanId: '17' },
    { id: '139', name: 'Rancaekek Kulon', kecamatanId: '17' },
    { id: '140', name: 'Rancaekek Wetan', kecamatanId: '17' },
    { id: '141', name: 'Sangiang', kecamatanId: '17' },
    { id: '142', name: 'Sukamanah', kecamatanId: '17' },
    { id: '143', name: 'Sukamulya', kecamatanId: '17' },
    { id: '144', name: 'Tegalsumedang', kecamatanId: '17' },
    { id: '145', name: 'Rancaekek Kencana', kecamatanId: '17' },

    // Additional data for CIPARAY
    { id: '146', name: 'Babakan', kecamatanId: '18' },
    { id: '147', name: 'Bumiwangi', kecamatanId: '18' },
    { id: '148', name: 'Ciheulang', kecamatanId: '18' },
    { id: '149', name: 'Cikoneng', kecamatanId: '18' },
    { id: '150', name: 'Ciparay', kecamatanId: '18' },
    { id: '151', name: 'Gunungleutik', kecamatanId: '18' },
    { id: '152', name: 'Manggungharja', kecamatanId: '18' },
    { id: '153', name: 'Mekarlaksana', kecamatanId: '18' },
    { id: '154', name: 'Mekarsari', kecamatanId: '18' },
    { id: '155', name: 'Pakutandang', kecamatanId: '18' },
    { id: '156', name: 'Sagaracipta', kecamatanId: '18' },
    { id: '157', name: 'Sarimahi', kecamatanId: '18' },
    { id: '158', name: 'Serangmekar', kecamatanId: '18' },
    { id: '159', name: 'Sumbersari', kecamatanId: '18' },

    // Additional data for PACET
    { id: '160', name: 'Cikawao', kecamatanId: '19' },
    { id: '161', name: 'Cikitu', kecamatanId: '19' },
    { id: '162', name: 'Cinanggela', kecamatanId: '19' },
    { id: '163', name: 'Cipeujeuh', kecamatanId: '19' },
    { id: '164', name: 'Girimulya', kecamatanId: '19' },
    { id: '165', name: 'Mandalahaji', kecamatanId: '19' },
    { id: '166', name: 'Maruyung', kecamatanId: '19' },
    { id: '167', name: 'Mekarjaya', kecamatanId: '19' },
    { id: '168', name: 'Mekarsari', kecamatanId: '19' },
    { id: '169', name: 'Nagrak', kecamatanId: '19' },
    { id: '170', name: 'Pangauban', kecamatanId: '19' },
    { id: '171', name: 'Sukarame', kecamatanId: '19' },
    { id: '172', name: 'Tanjungwangi', kecamatanId: '19' },

    // Additional data for KERTASARI
    { id: '173', name: 'Cibeureum', kecamatanId: '20' },
    { id: '174', name: 'Cihawuk', kecamatanId: '20' },
    { id: '175', name: 'Cikembang', kecamatanId: '20' },
    { id: '176', name: 'Neglawangi', kecamatanId: '20' },
    { id: '177', name: 'Resmitingal', kecamatanId: '20' },
    { id: '178', name: 'Santosa', kecamatanId: '20' },
    { id: '179', name: 'Sukapura', kecamatanId: '20' },
    { id: '180', name: 'Tarumajaya', kecamatanId: '20' },

    // Additional data for BALEENDAH
    { id: '181', name: 'Bojongmalaka', kecamatanId: '21' },
    { id: '182', name: 'Malakasari', kecamatanId: '21' },
    { id: '183', name: 'Rancamanyar', kecamatanId: '21' },
    { id: '184', name: 'Andir', kecamatanId: '21' },
    { id: '185', name: 'Baleendah', kecamatanId: '21' },
    { id: '186', name: 'Jelekong', kecamatanId: '21' },
    { id: '187', name: 'Manggahang', kecamatanId: '21' },
    { id: '188', name: 'Wargamekar', kecamatanId: '21' },

    // Additional data for MAJALAYA
    { id: '189', name: 'Biru', kecamatanId: '22' },
    { id: '190', name: 'Bojong', kecamatanId: '22' },
    { id: '191', name: 'Majakerta', kecamatanId: '22' },
    { id: '192', name: 'Majalaya', kecamatanId: '22' },
    { id: '193', name: 'Majasetra', kecamatanId: '22' },
    { id: '194', name: 'Neglasari', kecamatanId: '22' },
    { id: '195', name: 'Padamulya', kecamatanId: '22' },
    { id: '196', name: 'Padaulun', kecamatanId: '22' },
    { id: '197', name: 'Sukamaju', kecamatanId: '22' },
    { id: '198', name: 'Sukamukti', kecamatanId: '22' },
    { id: '199', name: 'Wangisagara', kecamatanId: '22' },

    // Additional data for SOLOKANJERUK
    { id: '200', name: 'Bojongemas', kecamatanId: '23' },
    { id: '201', name: 'Cibodas', kecamatanId: '23' },
    { id: '202', name: 'Langensari', kecamatanId: '23' },
    { id: '203', name: 'Padamukti', kecamatanId: '23' },
    { id: '204', name: 'Panyadap', kecamatanId: '23' },
    { id: '205', name: 'Rancakasumba', kecamatanId: '23' },
    { id: '206', name: 'Solokanjeruk', kecamatanId: '23' },

    // Additional data for PASEH
    { id: '207', name: 'Cigentur', kecamatanId: '24' },
    { id: '208', name: 'Cijagra', kecamatanId: '24' },
    { id: '209', name: 'Cipaku', kecamatanId: '24' },
    { id: '210', name: 'Cipedes', kecamatanId: '24' },
    { id: '211', name: 'Drawati', kecamatanId: '24' },
    { id: '212', name: 'Karangtunggal', kecamatanId: '24' },
    { id: '213', name: 'Loa', kecamatanId: '24' },
    { id: '214', name: 'Mekarpawitan', kecamatanId: '24' },
    { id: '215', name: 'Sindangsari', kecamatanId: '24' },
    { id: '216', name: 'Sukamanah', kecamatanId: '24' },
    { id: '217', name: 'Sukamantri', kecamatanId: '24' },
    { id: '218', name: 'Tangsimekar', kecamatanId: '24' },

    // Additional data for IBUN
    { id: '219', name: 'Cibeet', kecamatanId: '25' },
    { id: '220', name: 'Dukuh', kecamatanId: '25' },
    { id: '221', name: 'Ibun', kecamatanId: '25' },
    { id: '222', name: 'Karyalaksana', kecamatanId: '25' },
    { id: '223', name: 'Laksana', kecamatanId: '25' },
    { id: '224', name: 'Lampegan', kecamatanId: '25' },
    { id: '225', name: 'Mekarwangi', kecamatanId: '25' },
    { id: '226', name: 'Neglasari', kecamatanId: '25' },
    { id: '227', name: 'Pangguh', kecamatanId: '25' },
    { id: '228', name: 'Sudi', kecamatanId: '25' },
    { id: '229', name: 'Talun', kecamatanId: '25' },
    { id: '230', name: 'Tanggulun', kecamatanId: '25' },

    // Additional data for SOREANG
    { id: '231', name: 'Cingcin', kecamatanId: '26' },
    { id: '232', name: 'Karamatmulya', kecamatanId: '26' },
    { id: '233', name: 'Pamekaran', kecamatanId: '26' },
    { id: '234', name: 'Panyirapan', kecamatanId: '26' },
    { id: '235', name: 'Parungserab', kecamatanId: '26' },
    { id: '236', name: 'Sadu', kecamatanId: '26' },
    { id: '237', name: 'Sekarwangi', kecamatanId: '26' },
    { id: '238', name: 'Soreang', kecamatanId: '26' },
    { id: '239', name: 'Sukajadi', kecamatanId: '26' },
    { id: '240', name: 'Sukanagara', kecamatanId: '26' },

    // Additional data for PASIRJAMBU
    { id: '241', name: 'Cibodas', kecamatanId: '27' },
    { id: '242', name: 'Cikoneng', kecamatanId: '27' },
    { id: '243', name: 'Cisondari', kecamatanId: '27' },
    { id: '244', name: 'Cukanggenteng', kecamatanId: '27' },
    { id: '245', name: 'Margamulya', kecamatanId: '27' },
    { id: '246', name: 'Mekarmaju', kecamatanId: '27' },
    { id: '247', name: 'Mekarsari', kecamatanId: '27' },
    { id: '248', name: 'Pasirjambu', kecamatanId: '27' },
    { id: '249', name: 'Sugihmukti', kecamatanId: '27' },
    { id: '250', name: 'Tenjolaya', kecamatanId: '27' },

    // Additional data for CIWIDEY
    { id: '251', name: 'Ciwidey', kecamatanId: '28' },
    { id: '252', name: 'Lebakmuncang', kecamatanId: '28' },
    { id: '253', name: 'Nengkelan', kecamatanId: '28' },
    { id: '254', name: 'Panundaan', kecamatanId: '28' },
    { id: '255', name: 'Panyocokan', kecamatanId: '28' },
    { id: '256', name: 'Rawabogo', kecamatanId: '28' },
    { id: '257', name: 'Sukawening', kecamatanId: '28' },

    // Additional data for RANCABALI
    { id: '258', name: 'Alamendah', kecamatanId: '29' },
    { id: '259', name: 'Cipelah', kecamatanId: '29' },
    { id: '260', name: 'Indragiri', kecamatanId: '29' },
    { id: '261', name: 'Patengan', kecamatanId: '29' },
    { id: '262', name: 'Sukaresmi', kecamatanId: '29' },

    // Additional data for CANGKUANG
    { id: '263', name: 'Bandasari', kecamatanId: '30' },
    { id: '264', name: 'Cangkuang', kecamatanId: '30' },
    { id: '265', name: 'Ciluncat', kecamatanId: '30' },
    { id: '266', name: 'Jatisari', kecamatanId: '30' },
    { id: '267', name: 'Nagrak', kecamatanId: '30' },
    { id: '268', name: 'Pananjung', kecamatanId: '30' },
    { id: '269', name: 'Tanjungsari', kecamatanId: '30' },

    // Additional data for KUTAWARINGIN
    { id: '270', name: 'Buninagara', kecamatanId: '31' },
    { id: '271', name: 'Cibodas', kecamatanId: '31' },
    { id: '272', name: 'Cilame', kecamatanId: '31' },
    { id: '273', name: 'Gajahmekar', kecamatanId: '31' },
    { id: '274', name: 'Jatisari', kecamatanId: '31' },
    { id: '275', name: 'Jelegong', kecamatanId: '31' },
    { id: '276', name: 'Kopo', kecamatanId: '31' },
    { id: '277', name: 'Kutawaringin', kecamatanId: '31' },
    { id: '278', name: 'Padasuka', kecamatanId: '31' },
    { id: '279', name: 'Pameuntasan', kecamatanId: '31' },
    { id: '280', name: 'Sukamulya', kecamatanId: '31' },
  ];

  const [history] = useState([
    { id: 1, date: '2022-01-01', user: 'John Doe', action: 'Submitted' },
    { id: 2, date: '2022-01-02', user: 'Jane Smith', action: 'Updated' },
    // Add more history items as needed
  ]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Pengisian Suara
      </Typography>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            // onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Kecamatan"
            value={kecamatan}
            onChange={(e) => setKecamatan(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="" disabled>
              Pilih Kecamatan
            </MenuItem>
            {dummyKecamatan.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Kelurahan"
            value={kelurahan}
            onChange={(e) => setKelurahan(e.target.value)}
            variant="outlined"
            disabled={!kecamatan}
          >
            <MenuItem value="" disabled>
              Pilih Desa / Kelurahan
            </MenuItem>
            {dummyKelurahan
              .filter((option) => option.kecamatanId === kecamatan)
              .map((filteredOption) => (
                <MenuItem key={filteredOption.id} value={filteredOption.id}>
                  {filteredOption.name}
                </MenuItem>
              ))}
          </TextField>
        </Grid>
      </Grid>

      <div>
        <Grid container spacing={2} mb={5}>
          {Object.keys(calegData).map((party) => (
            <Grid key={party} item md={4}>
              <Card onClick={() => handlePartyClick(party)} style={{ cursor: 'pointer' }}>
                <CardContent>
                  <Typography variant="h6">{`Partai ${party}`}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedParty && (
          <Grid container spacing={2} mb={5}>
            {calegData[selectedParty].map((caleg, index) => (
              <Grid key={index} item md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ fontSize: '12px' }}>
                      {caleg.name}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TextField variant="outlined" fullWidth type="number" label="Jumlah Vote" />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>

      <Grid item xs={12} mb={5}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Grid>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Riwayat Perubahan
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Tanggal</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>
                      <Button>Lihat</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
