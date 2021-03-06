import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"

import { seo, data } from "config"

import { socialAccounts } from "src/components/footer/index"
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'next/link';

// export const getStaticPropts = async () => {
//   const res = await fetch('/src/skills.json')
//   const data = await res.json();

//   return {
//     props: {
//       skills: data
//     }
//   }
// }

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Home | ${seo.title}`
  const description = seo.description

  return (
    <>


      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        
        <Box>
          <Heading as="h1" fontSize="3xl" fontWeight="500" py="4">
            Hey, I'm Brendan McNamara
          </Heading>
          <Heading fontSize={["2xl", "3xl"]} fontWeight="700" py="2" >
            <Text as="span" color={color}>
              Developing
            </Text>{" "}
            seamless deployment experiences for companies.  
          </Heading>
          <h2>&</h2>
          <Heading fontSize={["2xl", "3xl"]} fontWeight="700">
            <Text as="span" color={color}>
              Advancing
            </Text>{" "}
            Web3 technologies as a user and developer.  
          </Heading>
          <Text py="4">
            based in the US.
          </Text>

          <Text color={color}>Solidity / Crypto / NFT's / Linux / DevOps </Text>

          <Heading as="h1" fontSize="2xl" fontWeight="300" py="5">
            I'm looking for work!
          </Heading>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
          <a href="https://www.linkedin.com/in/brendancmcnamara/">Contact me!</a>
          </Button>
        </Box>
      </Box>
{/* 
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {skills.map(skills => (
          <h3>{ skills }</h3>
        ))}
      </Box> */}

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
          >
            <Box
              w={{ base: "75%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
              <NextImage
                src={item.image}
                width="525"
                height="500"
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box w={{ lg: "55%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
        
      </Box>
      
    </>
  )
}

export default Home
