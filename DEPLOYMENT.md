# 🚀 دليل نشر الموقع على GitHub Pages

## 📋 المتطلبات الأساسية
- مشروع مرفوع على GitHub
- GitHub Actions workflow مُعد مسبقاً
- إعدادات GitHub Pages مُفعلة

## ⚙️ خطوات تفعيل GitHub Pages

### 1️⃣ تفعيل GitHub Pages في الـ Repository:

1. **اذهب إلى Repository على GitHub**:
   ```
   https://github.com/drift3/aldahawaqah-restaurant
   ```

2. **انقر على Settings**:
   - في شريط التنقل العلوي للـ repository

3. **انتقل إلى قسم Pages**:
   - في القائمة الجانبية اليسرى تحت "Code and automation"

4. **اختر مصدر النشر**:
   - **Source**: اختر "GitHub Actions"
   - **لا تختر** "Deploy from a branch"

### 2️⃣ رفع workflow إلى GitHub:

```bash
# إضافة ملف workflow الجديد
git add .github/workflows/deploy.yml
git add vite.config.js
git add DEPLOYMENT.md

# Commit مع رسالة واضحة
git commit -m "🚀 إضافة GitHub Actions للنشر التلقائي

✨ المميزات:
- workflow تلقائي للنشر على GitHub Pages
- بناء المشروع عند كل push للـ main branch
- دعم Node.js 18 و npm ci للتثبيت السريع
- تحديث vite.config.js لإضافة .nojekyll تلقائياً"

# رفع التعديلات
git push origin main
```

### 3️⃣ مراقبة عملية النشر:

1. **اذهب إلى تبويب Actions في GitHub**
2. **راقب تقدم الـ workflow**
3. **بعد انتهاء العملية بنجاح، الموقع سيكون متاح على**:
   ```
   https://drift3.github.io/aldahawaqah-restaurant/
   ```

## 🔄 النشر التلقائي

### كيف يعمل النظام:
- **تلقائياً**: عند كل `git push` للـ `main` branch
- **يدوياً**: من تبويب Actions → "Deploy to GitHub Pages" → "Run workflow"

### مراحل النشر:
1. **Build Stage**: 
   - تثبيت dependencies
   - بناء المشروع (`npm run build`)
   - إنشاء مجلد `dist/`

2. **Deploy Stage**:
   - رفع محتويات `dist/` إلى GitHub Pages
   - تحديث الموقع المباشر

## 📊 مراقبة الموقع

### التحقق من النشر:
```bash
# التحقق من آخر commit
git log --oneline -5

# التحقق من حالة الـ remote
git remote -v

# التحقق من الـ branch الحالي
git branch -v
```

### روابط مهمة:
- **الموقع المباشر**: `https://drift3.github.io/aldahawaqah-restaurant/`
- **Repository**: `https://github.com/drift3/aldahawaqah-restaurant`
- **Actions**: `https://github.com/drift3/aldahawaqah-restaurant/actions`
- **Settings**: `https://github.com/drift3/aldahawaqah-restaurant/settings/pages`

## 🛠️ استكشاف الأخطاء

### مشاكل شائعة:
1. **الموقع لا يظهر التعديلات**:
   - تأكد من إكمال الـ workflow بنجاح
   - امسح cache المتصفح (Ctrl+F5)

2. **خطأ في الـ build**:
   - تحقق من logs في تبويب Actions
   - تأكد من عدم وجود أخطاء في الكود

3. **مشكلة في الـ paths**:
   - تأكد من إعداد `base: '/aldahawaqah-restaurant/'` في vite.config.js

### نصائح:
- **الانتظار**: قد يستغرق النشر 2-5 دقائق
- **الفحص**: تحقق من Actions logs للتفاصيل
- **التجربة**: استخدم `npm run build` محلياً للاختبار

---

## 🎯 النتيجة النهائية

بعد تفعيل GitHub Pages، ستحصل على:
- ✅ نشر تلقائي فوري عند كل تعديل
- ✅ رابط ثابت للموقع
- ✅ SSL certificate مجاني
- ✅ CDN سريع من GitHub

**الموقع سيكون متاح على**: `https://drift3.github.io/aldahawaqah-restaurant/`