# 🚀 Quick Start Guide - Truekealo Frontend

## 5-Minute Setup

### Step 1: Install Backend Dependencies
```bash
cd Truekealo/backend
pip install -r requirements.txt
```

### Step 2: Start Backend Server
```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Step 3: Start Frontend Server
```bash
cd frontend-react
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:5173 (or 5174 if 5173 is taken)
```

---

## 🧪 Test the Application

### Try These Steps:

1. **Register a New Account**
   - Click "Registrarse" button
   - Fill in the form with:
     - Name: Your Name
     - Email: test@example.com
     - Password: TestPassword123 (min 8 chars)
     - Phone: +57 300 1234567
     - Location: Medellín, Antioquia
   - Click "Crear Cuenta"

2. **Create an Article**
   - Click "Publicar" in navbar
   - Fill in article details:
     - Title: "Old Laptop"
     - Description: "Dell Inspiron 15, works great"
     - Category: Electrónica (lowercase!)
     - Condition: Buena
     - Image: (optional)
   - Click "Publicar Artículo"

3. **Browse Articles**
   - Click "Explorar" in navbar
   - See your published article in the list
   - Click on article to view details
   - Use filters to find articles by category

4. **Send a Proposal**
   - Click on any article (that's not yours)
   - Click "Hacer Propuesta de Intercambio"
   - Select an article from your list to offer
   - Add a message (optional)
   - Click "Enviar Propuesta"

5. **Check Messages**
   - Click "Mensajes" in navbar
   - View conversations with other users
   - Send and receive messages

6. **Manage Your Profile**
   - Click your name in navbar dropdown
   - Click "Mi Perfil"
   - View or edit your information
   - Click "⚙️ Configuración" for account settings

---

## 📱 Mobile Responsive

The application is fully responsive:
- Desktop: Full sidebar and multi-column layouts
- Tablet: Adjusted grid layouts
- Mobile: Single column, hamburger menu for navigation

---

## 🔑 Key Points

1. **Category Values**: Must be lowercase
   - ✅ `electronica`, `ropa`, `libros`, `deportes`, `hogar`, `juguetes`, `otros`
   - ❌ NOT `Electrónica` or `ELECTRONICS`

2. **Password**: Minimum 8 characters

3. **JWT Tokens**: 
   - Automatically stored in localStorage
   - Automatically included in all API requests
   - Auto-refresh on 401 errors

4. **Images**:
   - Uploaded to `backend/uploads/articulos/`
   - Accessible via `/uploads/articulos/{filename}`

---

## 🆘 Troubleshooting

### "Cannot POST to http://localhost:8000"
**Solution**: Start the backend server first

### "CORS error"
**Solution**: Ensure backend config has:
```python
# app/core/config.py
ALLOWED_ORIGINS = ["*"]

# app/main.py
allow_origin_regex=".*"
```

### "Invalid category"
**Solution**: Use lowercase category names: `electronica` not `Electrónica`

### "Password too short"
**Solution**: Use at least 8 characters (e.g., `Test1234`)

### "Email already exists"
**Solution**: Use a different email address for new accounts

---

## 📚 Features Summary

### Authentication ✅
- Register
- Login
- Change Password
- Password Reset
- 2FA Settings

### Articles ✅
- Create Article
- View All Articles
- View Article Details
- Edit Article
- Delete Article
- Upload Image
- Search & Filter

### Proposals ✅
- Make Proposal
- View Received Proposals
- View Sent Proposals
- Accept Proposal
- Reject Proposal
- Cancel Proposal

### Messages ✅
- View Conversations
- Send Message
- Receive Message
- Mark as Read
- Unread Count

### Profile ✅
- View Profile
- Edit Profile
- View Statistics
- Account Settings

---

## 🎨 UI/UX Notes

- **Primary Color**: Orange (#e84c30)
- **Theme**: Light/Dark mode ready (CSS variables)
- **Font**: Plus Jakarta Sans
- **Icons**: Unicode/Emoji for visual indicators
- **Responsive**: Mobile-first approach

---

## 📞 Support

For issues or questions, check:
1. Browser console for error messages (F12)
2. Backend logs for API errors
3. Terminal output for frontend compilation errors

---

**Happy Trading! 🔄**
