import { Container } from '@mui/material';
import { Routes, Route} from 'react-router-dom';
import { AboutPage } from './pages/Aboutpage';
import { PaginationHomePage } from './pages/PaginationHomePage';
import { NotFoundPage } from './pages/NotFoundpage';

const PaginationApp = () => {

  return (
    <Container sx={{ marginTop: 5 }} maxWidth="md">
        <Routes>
            <Route path='/' element={<PaginationHomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Container>
  )
}

export default PaginationApp