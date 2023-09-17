import { Routes, Route} from 'react-router-dom';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import ImageDetails from '../components/ImageDetails/ImageDetails';

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ImageGrid />} />
      <Route path="/image/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CustomRoutes;