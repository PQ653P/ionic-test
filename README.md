
# README

##  **Használt Technológiák**
- **Ionic**: A mobil alkalmazások fejlesztésére szolgáló keretrendszer.
- **Angular**: A frontend fejlesztésére használt keretrendszer, amely támogatja a komponens-alapú fejlesztést.
- **RxJS (Observable)**: A folyamatos adatfrissítések kezelésére szolgál.

---

##  **Projekt Indítása**

1. **Ionic Projekt Létrehozása**:
    - Ha még nincs telepítve az Ionic CLI, telepítheted az alábbi parancs futtatásával:
      ```bash
      npm install -g @ionic/cli
      ```
    - Projekt létrehozása:
      ```bash
      ionic start scoped-service-app blank --type=angular
      ```

2. **Projekt Függőségek Telepítése**:
    A projekt könyvtárában futtasd az alábbi parancsot a szükséges függőségek telepítéséhez:
    ```bash
    npm install
    ```

3. **Alkalmazás Indítása**:
    Az alkalmazást helyben futtathatod az alábbi parancsokkal:
    ```bash
    ionic serve
    ```

4. **Dashboard page**:
    A widgetek ezen az oldalon vannak:
    ```bash
    http://localhost:{port}/dashboard
    ```

---

##  **Funkciók és Megvalósítás**

### 1. **Scoped Service**
A `MyScopedService` szolgáltatás lokálisan van regisztrálva a `DashboardPage` komponensnél. Ez biztosítja, hogy a komponens és annak gyerekkomponensei ugyanazt az instance-t használják a szolgáltatásból.

### 2. **Observable alapú adatfolyam**
A szolgáltatás tartalmaz két Observable-t:
- **Számláló**: Egy másodpercenként növekvő számot ad vissza.
- **Véletlenszerű szám**: Egy másodpercenként generált random szám 1 és 100 között.

### 3. **Gyerekkomponensek**
Két gyerekkomponenst hoztunk létre:
- **WidgetOneComponent**: A számláló értékét jeleníti meg.
- **WidgetTwoComponent**: A második widget, amely a véletlenszerű számot jeleníti meg.

### 4. **Feliratkozás és Leiratkozás**
Minden gyerekkomponens feliratkozik a megfelelő Observable-ra a `ngOnInit` metódusban, és a komponens törlésével (`ngOnDestroy`) gondoskodik a leiratkozásról.

### 5. **Leállítás Gomb**
A `DashboardPage` tartalmaz egy gombot, amivel mindkét widgetet le lehet állítani. A leállítás akkor történik, amikor a `stopWidgets()` metódus meghívódik, amely a `clearInterval` segítségével megszakítja a folyamatokat.

---

##  **Projektszerkezet**

- **src/app/services/my-scoped-service.service.ts**: A szolgáltatás, amely az Observable-t kezeli.
- **src/app/components/widget-one/widget-one.component.ts**: Az első widget, amely a számlálót jeleníti meg.
- **src/app/components/widget-two/widget-two.component.ts**: A második widget, amely a véletlenszerű számot jeleníti meg.
- **src/app/pages/dashboard/dashboard.page.ts**: Az oldal, amely a gyerekkomponenseket tartalmazza, és kezeli a gombot a widgetek leállításához.
- **src/app/pages/dashboard/dashboard.page.html**: Az oldal HTML sablonja, amely tartalmazza a widgetek megjelenítését és a gombot.

---
