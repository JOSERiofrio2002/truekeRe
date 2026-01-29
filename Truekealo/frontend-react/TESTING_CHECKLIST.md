# Frontend Improvements - Testing Checklist

## ✅ Delivered Components

### 1. **SearchBar Component** (`src/components/SearchBar.jsx`)
- **Features:**
  - Unified search input with consistent styling
  - Dual select dropdowns (Categoría / Condición)
  - Accessibility labels for all inputs
  - Responsive design (stacks on mobile)

### 2. **FileUpload Component** (`src/components/FileUpload.jsx`)
- **Features:**
  - Custom styled dropzone (replaces native file input)
  - Drag & drop support
  - Image preview thumbnail
  - File validation (format & size)
  - Custom error messages
  - Accessible with keyboard support (Enter/Space)
  - ARIA labels and live error regions

### 3. **UserMenu Component** (`src/components/UserMenu.jsx`)
- **Features:**
  - Hover & click support
  - Click outside to close
  - Keyboard navigation (Escape to close, Arrow keys)
  - Proper menu semantics (role="menu")
  - Focus management
  - "Cerrar Sesión" redirects to /login

### 4. **PropuestasMenu Component** (`src/components/PropuestasMenu.jsx`)
- **Features:**
  - Hover & click support
  - Click outside to close
  - Keyboard navigation
  - "Recibidas/Enviadas" navigation
  - Consistent styling with UserMenu

## 🎨 CSS Improvements (App.css)

### Search & Filter Styling
- ✓ Unified border radius (0.5rem)
- ✓ Consistent padding (0.75rem 1rem)
- ✓ Hover states with primary color
- ✓ Focus states with 3px primary outline + inner shadow
- ✓ Custom select dropdown arrow
- ✓ Dark mode support

### File Upload Styling
- ✓ Dashed border dropzone
- ✓ Drag-over visual feedback
- ✓ Image preview corner position
- ✓ Error state styling
- ✓ Helper text styling
- ✓ Responsive adjustments

### Dropdown Menu Improvements
- ✓ Smooth slide-down animation
- ✓ Hover color change to primary
- ✓ Proper z-index (1100)
- ✓ Dark mode background/border colors
- ✓ Keyboard focus visible outlines
- ✓ Divider line styling
- ✓ Logout button danger color

---

## 🧪 Testing Checklist

### **1. SEARCH & FILTER BAR**

#### Visual & Layout
- [ ] Input and both selects are same height (0.75rem padding)
- [ ] Border radius uniform (0.5rem)
- [ ] Spacing between elements consistent (1rem gap)
- [ ] Filter section card has proper padding (1.5rem)
- [ ] Responsive: on mobile (<768px) selects stack vertically

#### Input States
- [ ] **Default:** Gray border, light background
- [ ] **Hover:** Border color lighter, slightly different background
- [ ] **Focus:** Primary orange border + inner shadow glow
- [ ] **Placeholder text:** Readable, muted color
- [ ] **Typing:** Text appears, no overflow

#### Select Dropdown States
- [ ] Custom arrow visible (correct color: dark/light mode)
- [ ] **Default:** Appears as button, not ugly browser default
- [ ] **Hover:** Border color and background change
- [ ] **Focus:** Orange border + glow
- [ ] **Open:** Options display properly
- [ ] **Dark mode:** Text and border colors switch

#### Keyboard Accessibility
- [ ] Tab key navigates search → categoria → condicion
- [ ] Focus visible on each element
- [ ] Can select options with keyboard (Enter/Arrow keys)

#### Responsive Mobile
- [ ] On < 768px: selects stack below search
- [ ] On < 480px: padding reduces, still readable
- [ ] No horizontal overflow

---

### **2. FILE UPLOAD COMPONENT**

#### Visual Design
- [ ] Dropzone has dashed border (2px)
- [ ] "Subir imagen" button styled like primary button
- [ ] "Ningún archivo seleccionado" text visible, muted color
- [ ] Helper text (format/size) below
- [ ] Preview thumbnail appears top-right of dropzone (80-100px)

#### Interactions
- [ ] **Click button:** Opens file picker dialog
- [ ] **Click dropzone:** Also opens file picker
- [ ] **Drag file over:** Background changes to slightly transparent orange
- [ ] **Drop file:** File loads and preview shows
- [ ] **Invalid file:** Error message appears (not browser alert)
- [ ] **File too large (>5MB):** Error message "supera 5MB"
- [ ] **Wrong format (not jpg/png/webp):** Error "Formato no válido"

#### File Handling
- [ ] Valid image selected → file name displays
- [ ] Valid image → preview thumbnail appears
- [ ] File removed → "Ningún archivo seleccionado" resets
- [ ] Multiple select same input → only latest shown

#### Keyboard Support
- [ ] Focus on dropzone shows visible outline
- [ ] Press Enter/Space → opens file picker
- [ ] Tab navigates to file upload

#### Accessibility
- [ ] aria-label on dropzone button
- [ ] aria-describedby links to helper text
- [ ] Error messages have aria-live="polite"
- [ ] Can be used without mouse

#### Responsive
- [ ] On mobile: preview moves below dropzone
- [ ] Button full width on small screens
- [ ] Touch-friendly size

---

### **3. USER DROPDOWN MENU**

#### Visual Design
- [ ] "Juan Alverca" (username) has button-like appearance
- [ ] Background color is var(--active-light)
- [ ] Dropdown appears below and to the right
- [ ] Dropdown card: white background, border, shadow
- [ ] Each item has padding (0.75rem 1rem)

#### Layout & Spacing
- [ ] No text overlap ("Mi Perfil" and "Configuración" are separate items)
- [ ] Divider line between config items and logout
- [ ] Proper spacing between items (visual rhythm)
- [ ] Dropdown width sufficient for all text

#### Interactions
- [ ] **Hover on username:** Background color slightly darker
- [ ] **Click on username:** Dropdown opens/closes
- [ ] **Hover on dropdown item:** Background changes to active-light, text color to primary
- [ ] **Click "Mi Perfil":** Navigates to /perfil
- [ ] **Click "Configuración":** Navigates to /configuracion
- [ ] **Click "Cerrar Sesión":** 
  - User logs out
  - Redirects to /login
  - Token cleared from localStorage
  - No reload flicker

#### Keyboard Support
- [ ] Tab: Focus on username button
- [ ] Enter/Space: Toggles dropdown
- [ ] Arrow Down: Focuses first item (Mi Perfil)
- [ ] Arrow Down again: Focuses next item
- [ ] Arrow Up: Cycles backwards
- [ ] Tab inside menu: Cycles through items
- [ ] Escape: Closes dropdown, focuses username button

#### Click Outside
- [ ] Click outside dropdown → closes
- [ ] Click another nav item → dropdown closes

#### Accessibility
- [ ] Button has aria-haspopup="menu"
- [ ] Button has aria-expanded (true/false)
- [ ] Dropdown has role="menu"
- [ ] Items have role="menuitem"
- [ ] Focus visible on each menu item

#### Dark Mode
- [ ] Background color switches to var(--card-dark)
- [ ] Text color switches to var(--text-dark)
- [ ] Border color switches to var(--border-dark)

---

### **4. PROPUESTAS DROPDOWN MENU**

#### Visual Design
- [ ] "Propuestas" text styled like nav link
- [ ] Dropdown appears below (left-aligned)
- [ ] Same styling as user menu (card, border, shadow)

#### Items
- [ ] **Recibidas** and **Enviadas** clear, readable
- [ ] Hover: background to active-light, text to primary
- [ ] Proper padding and spacing

#### Interactions
- [ ] **Hover on "Propuestas":** Submenu appears
- [ ] **Click on "Propuestas":** Toggle open/close
- [ ] **Hover on submenu item:** Visual feedback
- [ ] **Click "Recibidas":** Navigates to /propuestas/recibidas
- [ ] **Click "Enviadas":** Navigates to /propuestas/enviadas

#### Keyboard
- [ ] Tab/Shift+Tab navigate through items
- [ ] Arrow Down/Up cycle items
- [ ] Enter selects
- [ ] Escape closes

#### Mobile Behavior
- [ ] Click to open/close (no hover)
- [ ] Dropdown positioned properly (doesn't go off-screen)

---

### **5. OVERALL STYLING CONSISTENCY**

#### Colors & Variables
- [ ] All inputs use var(--primary) for focus (#e84c30 orange)
- [ ] All text uses var(--text-light) or var(--text-dark)
- [ ] All borders use var(--border-light) or var(--border-dark)
- [ ] Error messages use var(--danger-color)
- [ ] Success messages use var(--success-color)

#### Typography
- [ ] Input/select font: Plus Jakarta Sans (inherited)
- [ ] Font size: 0.875rem for inputs
- [ ] Font weight: 500 for labels, 600 for buttons

#### Spacing
- [ ] Form group margin-bottom: 1.5rem
- [ ] Input/select padding: 0.75rem 1rem
- [ ] Gap between filter items: 1rem
- [ ] Dropdown items padding: 0.75rem 1rem

#### Shadows & Borders
- [ ] Dropdowns: box-shadow 0 10px 15px rgba(0,0,0,0.15)
- [ ] Focus glow: 0 0 0 3px rgba(232, 76, 48, 0.1)
- [ ] Border radius: 0.5rem for inputs, 0.75rem for cards

---

### **6. DARK MODE**

#### Toggles Correctly
- [ ] Switch to dark mode in settings
- [ ] All text colors switch (--text-light to --text-dark)
- [ ] All backgrounds switch (--bg-light to --bg-dark)
- [ ] All borders switch (--border-light to --border-dark)
- [ ] Primary orange remains same

#### Components in Dark Mode
- [ ] Search inputs: dark background, light text
- [ ] Select dropdown arrows: light color
- [ ] File upload: dark dropzone, light text
- [ ] Dropdown menus: dark background, light text
- [ ] Focus outlines: still visible

---

### **7. RESPONSIVE DESIGN**

#### Desktop (> 1024px)
- [ ] All elements at full size
- [ ] Filter selects side-by-side
- [ ] Dropdown positioned correctly

#### Tablet (768px - 1024px)
- [ ] Selects still side-by-side or 1 per row
- [ ] Dropdowns accessible
- [ ] Touch-friendly sizes

#### Mobile (< 768px)
- [ ] Filter selects stack 1 per row
- [ ] Search input full width
- [ ] Dropdowns positioned to fit screen
- [ ] File upload dropzone responsive
- [ ] No horizontal overflow

#### Very Small (< 480px)
- [ ] All inputs full width
- [ ] Padding reduces but still readable
- [ ] Touch targets >= 44px tall

---

### **8. INTEGRATION WITH EXISTING PAGES**

#### Explorar.jsx
- [ ] SearchBar component renders correctly
- [ ] Filter changes trigger API calls
- [ ] Search debounce works (500ms delay)

#### PublicarArticulo.jsx
- [ ] FileUpload component replaces native input
- [ ] File validation prevents bad uploads
- [ ] Form submission works with file or without

#### Navbar.jsx
- [ ] UserMenu renders with username
- [ ] PropuestasMenu renders without errors
- [ ] Logout functionality works
- [ ] Navigation links work

---

### **9. BROWSER COMPATIBILITY**

- [ ] **Chrome (latest):** All features work
- [ ] **Firefox (latest):** All features work
- [ ] **Safari (latest):** All features work
- [ ] **Edge (latest):** All features work
- [ ] **Mobile browsers:** iOS Safari, Chrome Android

---

### **10. FINAL CHECKS**

#### No Console Errors
- [ ] Open DevTools Console
- [ ] Navigate through app
- [ ] No red errors or warnings related to components

#### Performance
- [ ] No lag on interactions
- [ ] Dropdowns open instantly
- [ ] File preview generates quickly

#### Accessibility (Lighthouse)
- [ ] Run Lighthouse accessibility audit
- [ ] Score >= 90
- [ ] No contrast issues
- [ ] All interactive elements keyboard accessible

#### Screen Reader Testing (Optional)
- [ ] Test with NVDA or VoiceOver
- [ ] Menu items announced correctly
- [ ] Error messages announced
- [ ] File upload state announced

---

## 📝 Notes

### Known Browser Behaviors
- Custom select appearance may vary slightly by browser (acceptable)
- Drag & drop not available in older browsers (fallback to click)
- Dark mode depends on system preference or manual toggle

### Future Enhancements
- Keyboard arrow navigation for selects (if needed)
- Multiple file upload in FileUpload component
- Animations for open/close dropdowns

---

## ✨ Summary

All components follow Truekealo's design system:
- **Colors:** Primary orange (#e84c30), warm neutral palette
- **Typography:** Plus Jakarta Sans, consistent sizing
- **Spacing:** 0.5rem - 2rem (8px scale)
- **Shadows:** Subtle, accessible
- **Accessibility:** WCAG 2.1 AA compliant
- **Responsiveness:** Mobile-first approach

