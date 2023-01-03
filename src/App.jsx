import { RecipeProvider } from './appState/recipe/RecipeProvider';
import { Index } from './components/pages/Index';

export const App = () => {
      return (
            <>
                  <RecipeProvider>
                        <Index />
                  </RecipeProvider>
            </>
      );
};
