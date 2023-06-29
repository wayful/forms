import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Box, Button, Flex, HStack, Heading, Icon, IconButton, ListItem, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";

import { Page } from "~/components";
import { FormDetailPage, FormListPage } from "./pages";
import { List } from "@formed/ui";
import { FaArrowLeft, FaBackspace, FaCommentDots, FaEllipsisH, FaLink, FaPlus } from "react-icons/fa";

const FormShowPage = () => (
  <Text>FormShowPage</Text>
)

const FormEditPage = (props) => (
  <Text>FormEditPage {props.create ? 'Create' : ''}</Text>
)

export const FormRoutes = () => (
  <Routes>
    <Route index element={<FormListPage />} />
      <Route path=':id' element={<FormDetailPage />}>
    </Route>
    <Route path='create' element={<FormEditPage create={true} />} />
  </Routes>
)
