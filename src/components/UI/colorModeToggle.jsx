import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Button
        aria-label={
          colorMode === "dark" ? "switch to dark mode" : "switch to light mode"
        }
        ml={{ lg: "6" }}
        variant="ghost"
        _hover={{ color: "white", bgColor: "black" }}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? (
          <SunIcon name="sun-icon" />
        ) : (
          <MoonIcon name="moon-icon" />
        )}
      </Button>
    </>
  )
}

export default DarkModeToggle
