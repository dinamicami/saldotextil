import React from 'react';
import { Container, SpacedView, Loading, Message } from './styles';

import Filters from '../../components/Filters';
import FiltersModal from '../../components/Modal';
import FloatingButton from '../../components/FloatingButton';
import MiniFloatingButton from '../../components/MiniFloatingButton';
import Mini from '../../components/Secondaries/Mini';

import { announcement } from '../../database/functions';

export default function Jobs({ navigation }) {
  const [modal, setModal] = React.useState({ adstype: false, localization: false });

  const [filters, setFilters] = React.useState({ adstype: 'ads', localization: '' });
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    setResults([]);
    announcement.read((arr) => setResults(arr), 'secondaryAnnouncements', 'jobs', filters.adstype, 'state', filters.localization);
  }, [filters.adstype, filters.localization]);

  return (
    <>
      <FloatingButton iconName="pencil" action={() => navigation.navigate('Create', { name: 'Empregos' })} />
      <MiniFloatingButton iconName="file-account" action={() => navigation.navigate('Publish', { name: 'Empregos' })} />
      <Container>
        {/* Modais */}
        <FiltersModal
          status={{
            value: modal.adstype,
            set: (n) => setModal({ ...modal, adstype: n })
          }}
          options={[
              {
                title: 'Tipo de anúncio',
                options: [
                  { name: 'Anúncios', action: () => setFilters({ ...filters, adstype: 'ads' }), active: filters.adstype === 'ads' },
                  { name: 'Currículos', action: () => setFilters({ ...filters, adstype: 'cv' }), active: filters.adstype === 'cv' },
                ],
              },
            ]}
        />
        <FiltersModal
          status={{
            value: modal.localization,
            set: (n) => setModal({ ...modal, localization: n })
          }}
          options={[
            {
              title: 'Estado',
              options: [
                { name: 'Nenhum', action: () => setFilters({ ...filters, localization: '' }), active: filters.localization === '' },
                { name: 'AC', action: () => setFilters({ ...filters, localization: 'AC' }), active: filters.localization === 'AC' },
                { name: 'AL', action: () => setFilters({ ...filters, localization: 'AL' }), active: filters.localization === 'AL' },
                { name: 'AP', action: () => setFilters({ ...filters, localization: 'AP' }), active: filters.localization === 'AP' },
                { name: 'AM', action: () => setFilters({ ...filters, localization: 'AM' }), active: filters.localization === 'AM' },
                { name: 'BA', action: () => setFilters({ ...filters, localization: 'BA' }), active: filters.localization === 'BA' },
                { name: 'CE', action: () => setFilters({ ...filters, localization: 'CE' }), active: filters.localization === 'CE' },
                { name: 'DF', action: () => setFilters({ ...filters, localization: 'DF' }), active: filters.localization === 'DF' },
                { name: 'ES', action: () => setFilters({ ...filters, localization: 'ES' }), active: filters.localization === 'ES' },
                { name: 'GO', action: () => setFilters({ ...filters, localization: 'GO' }), active: filters.localization === 'GO' },
                { name: 'MA', action: () => setFilters({ ...filters, localization: 'MA' }), active: filters.localization === 'MA' },
                { name: 'MT', action: () => setFilters({ ...filters, localization: 'MT' }), active: filters.localization === 'MT' },
                { name: 'MS', action: () => setFilters({ ...filters, localization: 'MS' }), active: filters.localization === 'MS' },
                { name: 'MG', action: () => setFilters({ ...filters, localization: 'MG' }), active: filters.localization === 'MG' },
                { name: 'PA', action: () => setFilters({ ...filters, localization: 'PA' }), active: filters.localization === 'PA' },
                { name: 'PB', action: () => setFilters({ ...filters, localization: 'PB' }), active: filters.localization === 'PB' },
                { name: 'PR', action: () => setFilters({ ...filters, localization: 'PR' }), active: filters.localization === 'PR' },
                { name: 'PE', action: () => setFilters({ ...filters, localization: 'PE' }), active: filters.localization === 'PE' },
                { name: 'PI', action: () => setFilters({ ...filters, localization: 'PI' }), active: filters.localization === 'PI' },
                { name: 'RJ', action: () => setFilters({ ...filters, localization: 'RJ' }), active: filters.localization === 'RJ' },
                { name: 'RN', action: () => setFilters({ ...filters, localization: 'RN' }), active: filters.localization === 'RN' },
                { name: 'RS', action: () => setFilters({ ...filters, localization: 'RS' }), active: filters.localization === 'RS' },
                { name: 'RO', action: () => setFilters({ ...filters, localization: 'RO' }), active: filters.localization === 'RO' },
                { name: 'RR', action: () => setFilters({ ...filters, localization: 'RR' }), active: filters.localization === 'RR' },
                { name: 'SC', action: () => setFilters({ ...filters, localization: 'SC' }), active: filters.localization === 'SC' },
                { name: 'SP', action: () => setFilters({ ...filters, localization: 'SP' }), active: filters.localization === 'SP' },
                { name: 'SE', action: () => setFilters({ ...filters, localization: 'SE' }), active: filters.localization === 'SE' },
                { name: 'TO', action: () => setFilters({ ...filters, localization: 'TO' }), active: filters.localization === 'TO' },
              ],
            },
          ]}
        />

        {/* Filtros */}
        <Filters
          data={[
            { title: 'Tipo de anúncio', action: () => setModal({...modal, adstype: true}) },
            { title: 'Localização', action: () => setModal({...modal, localization: true})}
          ]}
        />

        {
          results[0] ? (
            <>
              {
                results.map(item => (
                  <Mini
                    key={`${item.title}-${item.user}`}
                    item={{
                      title: item.title,
                      image: item.images[0],
                      enterprise: item.user,
                      description: item.description,
                      city: item.city,
                      state: item.state
                    }}
                    type={filters.adstype}
                  />
                ))
              }
            </>
          ) : (
            <Message>Não há {filters.adstype === 'ads' ? 'empregos' : 'currículos'}</Message>
          )
        }
        

        <SpacedView />
      </Container>
    </>
  );
}
