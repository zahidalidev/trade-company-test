import BubbleView from 'components/BubbleView/BubbleView'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => (
  <ReactRoutes>
    <Route exact path='/' element={<BubbleView />} />
  </ReactRoutes>
)

export default Routes
