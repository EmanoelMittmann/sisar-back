import { PrismaClient } from 'orm-build/generated/prisma';
import * as bcrypt from 'bcrypt';

async function seedInitialData() {
  const prisma = new PrismaClient();

  const pass = await bcrypt.hash('1q2w3e4r5t', 10);

  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: pass,
      cpf: '12345678900',
      phone: '11999999999',
      name: 'Admin',
      role: 'ADMIN',
    },
  });
}

seedInitialData();
