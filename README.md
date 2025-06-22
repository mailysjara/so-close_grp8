# So-Close - Groupe 8

Ce dépôt contient les livrables des TP du cours SOCRA dans le cadre de la majeure SIGL à EPITA.

**Groupe 8**
- Tom Caschera
- Maïlys Jara

**Démo en ligne** : [Lien vers la démo](http://so-close.groupe8.socra-sigl.fr/)

---

## 🌱 Fonctionnalités développées

* **Création d’un nouveau jardin** : formulaire dynamique permettant d’ajouter un jardin urbain sur une carte.
* **Carte interactive** : visualisation des jardins existants dans Paris grâce à la bibliothèque Leaflet.

---

## 🛠️ Technologies utilisées

* **React** avec fichiers `.tsx`
* **React Router** pour une **navigation multi-pages**
* **Leaflet** pour la carte interactive
* **GitHub Actions** pour l’automatisation CI/CD
* **Nginx** pour l’hébergement et le reverse proxy

---

## ⚙️ Mise en place et déploiement

* Le projet est automatiquement **buildé via NPM** dans une **pipeline GitHub Actions**.
* La **CI exporte uniquement le dossier `dist/`** (build de production).
* Ce dossier est ensuite copié sur une **VM distante**.
* **Nginx** récupère et expose le contenu de `dist/` pour l'accès au frontend.

---
