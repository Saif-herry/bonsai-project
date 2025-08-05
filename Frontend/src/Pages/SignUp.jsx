import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spacer,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { registerAPI } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fullname, setFullname] = useState("");
  const [country, setCountry] = useState(countries[0]); // Set default
  const [currency, setCurrency] = useState(currencies[0].code); // Set default
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsLoading(true);

    const NewUser = {
      email,
      fullname,
      password: pass,
      country,
      currency,
    };

    dispatch(registerAPI(NewUser))
      .then((res) => {
        setIsLoading(false);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        toast({
          title: "Signup failed.",
          description: err?.message || "Please try again.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Navbar />
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading fontWeight="600" as="h4" size="lg" textAlign="center">
              Try Bonsai free with your Workflow today
            </Heading>

            <Heading fontSize="4xl" textAlign="center">
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="lg"
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box flex="1">
                  <FormControl id="fullname" isRequired>
                    <FormLabel color="grey">Full Name</FormLabel>
                    <Input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel color="grey">Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel color="grey">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Flex>
                <Text fontWeight="600" color="grey">
                  COUNTRY
                </Text>
                <Spacer />
                <Text fontWeight="600" color="grey" mr="28%">
                  CURRENCY
                </Text>
              </Flex>

              <Flex mt="2">
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>

                <Spacer />

                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  ml={4}
                >
                  {currencies.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {label}
                    </option>
                  ))}
                </Select>
              </Flex>

              <Link
                color="grey"
                fontWeight="lighter"
                href="https://app.hellobonsai.com/terms"
              >
                Terms and conditions
              </Link>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSignUp}
                  size="lg"
                  bg="#00B289"
                  color="white"
                  _hover={{ bg: "#00B295" }}
                  isLoading={isLoading}
                  loadingText="Signing up"
                  spinnerPlacement="start"
                >
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align="center">
                  Already a user?{" "}
                  <Link href="/Login" color="#00B295">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

// countries.js
export const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of The",
  "Cook Islands",
  "Costa Rica",
  "Cote D'ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-bissau",
  "Guyana",
  "Haiti",
  "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and The South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// currencies.js
export const currencies = [
  { code: "USD", label: "US dollar" },
  { code: "EUR", label: "Euro" },
  { code: "JPY", label: "Japanese yen" },
  { code: "GBP", label: "Pound sterling" },
  { code: "AED", label: "United Arab Emirates dirham" },
  { code: "AFN", label: "Afghan afghani" },
  { code: "ALL", label: "Albanian lek" },
  { code: "AMD", label: "Armenian dram" },
  { code: "ANG", label: "Netherlands Antillean guilder" },
  { code: "AOA", label: "Angolan kwanza" },
  { code: "ARS", label: "Argentine peso" },
  { code: "AUD", label: "Australian dollar" },
  { code: "AWG", label: "Aruban florin" },
  { code: "AZN", label: "Azerbaijani manat" },
  { code: "BAM", label: "Bosnia and Herzegovina convertible mark" },
  { code: "BBD", label: "Barbadian dollar" },
  { code: "BDT", label: "Bangladeshi taka" },
  { code: "BGN", label: "Bulgarian lev" },
  { code: "BHD", label: "Bahraini dinar" },
  { code: "BIF", label: "Burundian franc" },
  { code: "BMD", label: "Bermudian dollar" },
  { code: "BND", label: "Brunei dollar" },
  { code: "BOB", label: "Bolivian boliviano" },
  { code: "BRL", label: "Brazilian real" },
  { code: "BSD", label: "Bahamian dollar" },
  { code: "BTN", label: "Bhutanese ngultrum" },
  { code: "BWP", label: "Botswana pula" },
  { code: "BYN", label: "Belarusian ruble" },
  { code: "BZD", label: "Belize dollar" },
  { code: "CAD", label: "Canadian dollar" },
  { code: "CDF", label: "Congolese franc" },
  { code: "CHF", label: "Swiss franc" },
  { code: "CLP", label: "Chilean peso" },
  { code: "CNY", label: "Chinese yuan" },
  { code: "COP", label: "Colombian peso" },
  { code: "CRC", label: "Costa Rican colón" },
  { code: "CUC", label: "Cuban convertible peso" },
  { code: "CUP", label: "Cuban peso" },
  { code: "CVE", label: "Cape Verdean escudo" },
  { code: "CZK", label: "Czech koruna" },
  { code: "DJF", label: "Djiboutian franc" },
  { code: "DKK", label: "Danish krone" },
  { code: "DOP", label: "Dominican peso" },
  { code: "DZD", label: "Algerian dinar" },
  { code: "EGP", label: "Egyptian pound" },
  { code: "ERN", label: "Eritrean nakfa" },
  { code: "ETB", label: "Ethiopian birr" },
  { code: "FJD", label: "Fijian dollar" },
  { code: "FKP", label: "Falkland Islands pound" },
  { code: "GEL", label: "Georgian lari" },
  { code: "GGP", label: "Guernsey pound" },
  { code: "GHS", label: "Ghanaian cedi" },
  { code: "GIP", label: "Gibraltar pound" },
  { code: "GMD", label: "Gambian dalasi" },
  { code: "GNF", label: "Guinean franc" },
  { code: "GTQ", label: "Guatemalan quetzal" },
  { code: "GYD", label: "Guyanese dollar" },
  { code: "HKD", label: "Hong Kong dollar" },
  { code: "HNL", label: "Honduran lempira" },
  { code: "HRK", label: "Croatian kuna" },
  { code: "HTG", label: "Haitian gourde" },
  { code: "HUF", label: "Hungarian forint" },
  { code: "IDR", label: "Indonesian rupiah" },
  { code: "ILS", label: "Israeli new shekel" },
  { code: "IMP", label: "Manx pound" },
  { code: "INR", label: "Indian rupee" },
  { code: "IQD", label: "Iraqi dinar" },
  { code: "IRR", label: "Iranian rial" },
  { code: "ISK", label: "Icelandic króna" },
  { code: "JEP", label: "Jersey pound" },
  { code: "JMD", label: "Jamaican dollar" },
  { code: "JOD", label: "Jordanian dinar" },
  { code: "KES", label: "Kenyan shilling" },
  { code: "KGS", label: "Kyrgyzstani som" },
  { code: "KHR", label: "Cambodian riel" },
  { code: "KMF", label: "Comorian franc" },
  { code: "KPW", label: "North Korean won" },
  { code: "KRW", label: "South Korean won" },
  { code: "KWD", label: "Kuwaiti dinar" },
  { code: "KYD", label: "Cayman Islands dollar" },
  { code: "KZT", label: "Kazakhstani tenge" },
  { code: "LAK", label: "Lao kip" },
  { code: "LBP", label: "Lebanese pound" },
  { code: "LKR", label: "Sri Lankan rupee" },
  { code: "LRD", label: "Liberian dollar" },
  { code: "LSL", label: "Lesotho loti" },
  { code: "LYD", label: "Libyan dinar" },
  { code: "MAD", label: "Moroccan dirham" },
  { code: "MDL", label: "Moldovan leu" },
  { code: "MGA", label: "Malagasy ariary" },
  { code: "MKD", label: "Macedonian denar" },
  { code: "MMK", label: "Burmese kyat" },
  { code: "MNT", label: "Mongolian tögrög" },
  { code: "MOP", label: "Macanese pataca" },
  { code: "MRU", label: "Mauritanian ouguiya" },
  { code: "MUR", label: "Mauritian rupee" },
  { code: "MVR", label: "Maldivian rufiyaa" },
  { code: "MWK", label: "Malawian kwacha" },
  { code: "MXN", label: "Mexican peso" },
  { code: "MYR", label: "Malaysian ringgit" },
  { code: "MZN", label: "Mozambican metical" },
  { code: "NAD", label: "Namibian dollar" },
  { code: "NGN", label: "Nigerian naira" },
  { code: "NIO", label: "Nicaraguan córdoba" },
  { code: "NOK", label: "Norwegian krone" },
  { code: "NPR", label: "Nepalese rupee" },
  { code: "NZD", label: "New Zealand dollar" },
  { code: "OMR", label: "Omani rial" },
  { code: "PAB", label: "Panamanian balboa" },
  { code: "PEN", label: "Peruvian sol" },
  { code: "PGK", label: "Papua New Guinean kina" },
  { code: "PHP", label: "Philippine peso" },
  { code: "PKR", label: "Pakistani rupee" },
  { code: "PLN", label: "Polish złoty" },
  { code: "PYG", label: "Paraguayan guaraní" },
  { code: "QAR", label: "Qatari riyal" },
  { code: "RON", label: "Romanian leu" },
  { code: "RSD", label: "Serbian dinar" },
  { code: "RUB", label: "Russian ruble" },
  { code: "RWF", label: "Rwandan franc" },
  { code: "SAR", label: "Saudi riyal" },
  { code: "SEK", label: "Swedish krona" },
  { code: "SGD", label: "Singapore dollar" },
  { code: "SHP", label: "Saint Helena pound" },
  { code: "SLL", label: "Sierra Leonean leone" },
  { code: "SOS", label: "Somali shilling" },
  { code: "SRD", label: "Surinamese dollar" },
  { code: "SSP", label: "South Sudanese pound" },
  { code: "STN", label: "São Tomé and Príncipe dobra" },
  { code: "SYP", label: "Syrian pound" },
  { code: "SZL", label: "Swazi lilangeni" },
  { code: "THB", label: "Thai baht" },
  { code: "TJS", label: "Tajikistani somoni" },
  { code: "TMT", label: "Turkmenistan manat" },
  { code: "TND", label: "Tunisian dinar" },
  { code: "TOP", label: "Tongan paʻanga" },
  { code: "TRY", label: "Turkish lira" },
  { code: "TTD", label: "Trinidad and Tobago dollar" },
  { code: "TWD", label: "New Taiwan dollar" },
  { code: "TZS", label: "Tanzanian shilling" },
  { code: "UAH", label: "Ukrainian hryvnia" },
  { code: "UGX", label: "Ugandan shilling" },
  { code: "UYU", label: "Uruguayan peso" },
  { code: "UZS", label: "Uzbekistani soʻm" },
  { code: "VES", label: "Venezuelan bolívar soberano" },
  { code: "VND", label: "Vietnamese đồng" },
  { code: "VUV", label: "Vanuatu vatu" },
  { code: "WST", label: "Samoan tālā" },
  { code: "XAF", label: "Central African CFA franc" },
  { code: "XCD", label: "Eastern Caribbean dollar" },
  { code: "XOF", label: "West African CFA franc" },
  { code: "XPF", label: "CFP franc" },
  { code: "ZAR", label: "South African rand" },
  { code: "ZMW", label: "Zambian kwacha" },
  { code: "ZWB", label: "Zimbabwean bonds" },
];
