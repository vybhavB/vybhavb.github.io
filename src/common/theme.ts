import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}



const theme = extendTheme(
    {
        config,
        components: {
            Button: {
            
            }
        }

    }
);
export default theme
