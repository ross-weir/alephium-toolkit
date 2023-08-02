import {
  AppShell,
  Footer,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarNested from "./AppNavBar";
import AppHeader from "./AppHeader";
import WalletInfo from "./Wallet/WalletInfo";
import { WIP } from "./Misc/WIP";
import TokenInfo from "./Token/TokenInfo";

function AppShellExample() {
  const theme = useMantineTheme();

  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <NavbarNested />
        }
        footer={
          <Footer height={60} p="md">
            <Text fw="bold" fz="sm">Powered by BlockFlow, Stateful UTXO, PoLW</Text>
          </Footer>
        }
        header={
          <AppHeader />
        }
      >
        <Routes>
          <Route path="/" element={<WalletInfo />} />
          <Route path="/token/all" element={<WIP />} />
          <Route path="/token/info" element={<TokenInfo />} />
          <Route path="/token/new" element={<WIP />} />
          <Route path="/token/burn" element={<WIP />} />
          <Route path="/nft/all" element={<WIP />} />
          <Route path="/nft/info" element={<WIP />} />
          <Route path="/nft/new-collection" element={<WIP />} />
          <Route path="/nft/burn" element={<WIP />} />
          <Route path="/contract/play" element={<WIP />} />
          <Route path="/contract/info" element={<WIP />} />
          <Route path="/contract/deploy" element={<WIP />} />
          <Route path="/multisig" element={<WIP />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default AppShellExample;
