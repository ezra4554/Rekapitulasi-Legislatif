import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

SuaraCalegSearch.propTypes = {
  suaraCalegs: PropTypes.array.isRequired,
};

export default function SuaraCalegSearch({ suaraCalegs }) {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      slotProps={{
        paper: {
          sx: {
            width: 320,
            [`& .${autocompleteClasses.option}`]: {
              typography: 'body2',
            },
          },
        },
      }}
      options={suaraCalegs}
      getOptionLabel={(suaraCaleg) => suaraCaleg.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Cari suara Caleg..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
