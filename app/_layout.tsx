//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Bem-vindo!",
          title: "Bem-vindo!",
        }}
      />
      <Drawer.Screen
        name="telaSobre" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Sobre",
          title: "Sobre",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="telaCadastro" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Cadastro",
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="telaHome" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
    </Drawer>
  );
}