const article = [
  { value: 'AIRSTRECH', label: 'AIRSTRECH' },
  { value: 'Alpa', label: 'Alpa Seda' },
  { value: 'Alpaca', label: 'Alpaca' },
  { value: 'ANARRUGA', label: 'ANARRUGA' },
  { value: 'Arrastão', label: 'Arrastão' },
  { value: 'Barrado', label: 'Barrado' },
  { value: 'BRIM', label: 'BRIM' },
  { value: 'Brocado', label: 'Brocado' },
  { value: 'CAMBRAIA', label: 'CAMBRAIA' },
  { value: 'Camuflado', label: 'Camuflado' },
  { value: 'Canelado', label: 'Canelado' },
  { value: 'Cashimira', label: 'Cashimira' },
  { value: 'CETIM', label: 'CETIM' },
  { value: 'CHAMOIX', label: 'CHAMOIX' },
  { value: 'CHARMEUSE', label: 'CHARMEUSE' },
  { value: 'Chenille', label: 'Chenille' },
  { value: 'CHIFFON', label: 'CHIFFON' },
  { value: 'Cotelê', label: 'Cotelê' },
  { value: 'COTTON', label: 'COTTON' },
  { value: 'Couro', label: 'Couro' },
  { value: 'CREPE', label: 'CREPE' },
  { value: 'CREPINE', label: 'CREPINE' },
  { value: 'CRETONE', label: 'CRETONE' },
  { value: 'Devorê', label: 'Devorê' },
  { value: 'DIOLENE', label: 'DIOLENE' },
  { value: 'DRY FIT', label: 'DRY FIT' },
  { value: 'ENERGY', label: 'ENERGY' },
  { value: 'Entretela', label: 'Entretela' },
  { value: 'ESCALINE', label: 'ESCALINE' },
  { value: 'Faillete', label: 'Faillete' },
  { value: 'Felpa', label: 'Felpa' },
  { value: 'FELTRO', label: 'FELTRO' },
  { value: 'FILÓ', label: 'FILÓ' },
  { value: 'FLANELA', label: 'FLANELA' },
  { value: 'FORRO', label: 'FORRO' },
  { value: 'FUSTÃO', label: 'FUSTÃO' },
  { value: 'GABARDINE', label: 'GABARDINE' },
  { value: 'GAZAR', label: 'GAZAR' },
  { value: 'GORGURÃO', label: 'GORGURÃO' },
  { value: 'Guipure', label: 'Guipure' },
  { value: 'HELANCA', label: 'HELANCA' },
  { value: 'JACQUARD', label: 'JACQUARD' },
  { value: 'JEANS', label: 'JEANS' },
  { value: 'JERSEY', label: 'JERSEY' },
  { value: 'JUTA', label: 'JUTA' },
  { value: 'Lã', label: 'Lã' },
  { value: 'LAISE', label: 'LAISE' },
  { value: 'LAMÊ', label: 'LAMÊ' },
  { value: 'LENATEX', label: 'LENATEX' },
  { value: 'LIGANETE', label: 'LIGANETE' },
  { value: 'LINHÃO', label: 'LINHÃO' },
  { value: 'LINHO', label: 'LINHO' },
  { value: 'LOUREX', label: 'LOUREX' },
  { value: 'Lycra', label: 'Lycra' },
  { value: 'MALHAS', label: 'MALHAS' },
  { value: 'Meia Malha', label: 'Meia Malha' },
  { value: 'Mescla', label: 'Mescla' },
  { value: 'MICROFIBRA', label: 'MICROFIBRA' },
  { value: 'MICROTULE', label: 'MICROTULE' },
  { value: 'MICROVISCOSE', label: 'MICROVISCOSE' },
  { value: 'Moletim', label: 'Moletim' },
  { value: 'MOLETOM', label: 'MOLETOM' },
  { value: 'MORIM', label: 'MORIM' },
  { value: 'MUSSELINE', label: 'MUSSELINE' },
  { value: 'Neoprene', label: 'Neoprene' },
  { value: 'NYLON', label: 'NYLON' },
  { value: 'ORGANZA', label: 'ORGANZA' },
  { value: 'OXFORD', label: 'OXFORD' },
  { value: 'Paête', label: 'Paête' },
  { value: 'Pelúcia', label: 'Pelúcia' },
  { value: 'PERCAL', label: 'PERCAL' },
  { value: 'PIQUET', label: 'PIQUET' },
  { value: 'Plush', label: 'Plush' },
  { value: 'Poá', label: 'Poá' },
  { value: 'Poliéster', label: 'Poliéster' },
  { value: 'POPELINE', label: 'POPELINE' },
  { value: 'Renda', label: 'Renda' },
  { value: 'Ribana', label: 'Ribana' },
  { value: 'Risca de Giz', label: 'Risca de Giz' },
  { value: 'SARJA', label: 'SARJA' },
  { value: 'Seda', label: 'Seda' },
  { value: 'Segunda Pele', label: 'Segunda Pele' },
  { value: 'Seletel', label: 'Seletel' },
  { value: 'SHANTUNG', label: 'SHANTUNG' },
  { value: 'Soft', label: 'Soft' },
  { value: 'TAC-TEL', label: 'TAC-TEL' },
  { value: 'TAFETÁ', label: 'TAFETÁ' },
  { value: 'Tela', label: 'Tela' },
  { value: 'TERGAL', label: 'TERGAL' },
  { value: 'TIE-DYE', label: 'TIE-DYE' },
  { value: 'TNT', label: 'TNT' },
  { value: 'TRICOLEX', label: 'TRICOLEX' },
  { value: 'Tricoline', label: 'Tricoline' },
  { value: 'TULE', label: 'TULE' },
  { value: 'TUNIL', label: 'TUNIL' },
  { value: 'TWEED', label: 'TWEED' },
  { value: 'VELUDINE', label: 'VELUDINE' },
  { value: 'VELUDO', label: 'VELUDO' },
  { value: 'VISCOLYCRA', label: 'VISCOLYCRA' },
  { value: 'VISCOSE', label: 'VISCOSE' },
  { value: 'VOIL', label: 'VOIL' },
  { value: 'Xadrez', label: 'Xadrez' },
  { value: 'Diversos', label: 'Diversos' },
  { value: 'Outros', label: 'Outros' },
];

export default article;
