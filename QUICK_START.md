# ⚡ QUICK START - Tailwind CSS Portfolio

## 🚀 Mulai dalam 5 Menit

### Step 1: Install Dependencies (1 menit)

```bash
npm install
```

### Step 2: Start Development (30 detik)

```bash
npm run dev
```

Terminal akan menunjukkan:

```
Rebuilding...
✓ Done
```

### Step 3: Buka di Browser (30 detik)

- File → Open File → Pilih `index.html`
- ATAU gunakan Live Server extension (right-click → Open with Live Server)

### Step 4: Edit dan Lihat Perubahan

Setiap kali Anda edit file `.html` atau `.js`, browser akan auto-refresh!

## 🎯 Common Tasks

### Mengubah Warna Brand

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: '#YOUR_COLOR_HERE',
}
```

### Mengubah Judul

Edit `index.html`:

```html
<h1 class="font-playfair text-5xl md:text-7xl">Nama Anda</h1>
```

### Menambah Spacing

Gunakan Tailwind classes:

```html
<!-- p = padding, m = margin -->
<div class="p-8 m-4">Content</div>
```

### Membuat Responsive

Tailwind responsive classes:

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
```

## 📱 Responsive Breakpoints

| Device  | Class  | Width    |
| ------- | ------ | -------- |
| Mobile  | (none) | < 768px  |
| Tablet  | `md:`  | ≥ 768px  |
| Desktop | `lg:`  | ≥ 1024px |

## 🌓 Dark Mode

Toggle dengan theme button (top right).

Styling untuk dark mode:

```html
<div class="bg-white text-black dark:bg-black dark:text-white">
  Light mode: white bg, Dark mode: black bg
</div>
```

## 📦 Production Build

Sebelum deploy:

```bash
npm run build
```

Ini akan generate minified `output.css` untuk production.

## 🔗 File Structure

```
Your Project/
├── index.html           ← Edit konten di sini
├── script.js            ← Interactivity & dark mode
├── styles.css           ← Tailwind input
├── output.css           ← Generated (jangan edit)
├── tailwind.config.js   ← Customize design
├── package.json         ← Dependencies
└── README.md            ← Full documentation
```

## ✨ Useful Tailwind Classes

### Text

- `text-white` - Text color
- `text-2xl` - Font size
- `font-bold` - Font weight
- `leading-tight` - Line height

### Layout

- `flex` - Flexbox
- `grid` - Grid layout
- `gap-8` - Gap between items
- `justify-center` - Center content

### Styling

- `bg-black` - Background color
- `border border-gray-800` - Border
- `rounded-2xl` - Border radius
- `p-8` - Padding
- `m-4` - Margin

### Effects

- `hover:bg-white/10` - Hover effect
- `transition-all` - Smooth transition
- `opacity-50` - Opacity
- `shadow-lg` - Box shadow

## 🎨 Color Reference

Tailwind default colors:

- Black/White: `black`, `white`
- Gray: `gray-50` to `gray-900`
- Blues: `blue-50` to `blue-900`
- Plus: red, green, yellow, purple, pink, etc.

With opacity: `bg-white/10` (10% opacity)

## 🐛 Troubleshooting

**Q: CSS tidak berubah**

- A: Pastikan `npm run dev` running

**Q: Classes tidak bekerja**

- A: Check typo, pastikan format benar (e.g., `text-2xl` bukan `text-2-xl`)

**Q: Dark mode tidak jalan**

- A: Check theme button di navbar (top right)

**Q: Perlu bantuan?**

- Check [TAILWIND_MIGRATION.md](./TAILWIND_MIGRATION.md)
- Check [README.md](./README.md)
- Visit: https://tailwindcss.com/docs

## 💡 Tips

1. Use browser DevTools (F12) to inspect elements
2. Check Tailwind docs for all available classes
3. Use responsive classes (md:, lg:) for mobile-first design
4. Customize colors/fonts in tailwind.config.js

## 🎓 Learning Resources

- [Tailwind CSS Official Docs](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)
- [Tailwind CSS Cheat Sheet](https://cheatsheet.tailwindcss.com)

---

**Happy coding!** 🚀 Let me know if you need any help!
