import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="1rem" fontWeight="750">
        Bmacs
      </chakra.a>
    </NextLink>
  </>
)

export default Logo