import { RecipeProvider } from './appState/recipe/RecipeProvider';
import AppRoutes from './components/pages/Index';

export const App = () => {
      return (
            <>
                  <RecipeProvider>
                        <AppRoutes />
                  </RecipeProvider>
            </>
      );
};
