import { PrismaClient } from 'orm-build/generated/prisma';
import * as bcrypt from 'bcrypt';

async function SEED_INITIAL_DATA() {
  const prisma = new PrismaClient();

  const pass = await bcrypt.hash('1q2w3e4r5t', 10);

  const user = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: pass,
      cpf: '12345678900',
      phone: '11999999999',
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  await prisma.organization.create({
    data: {
      fantasy_name: 'Admin Company',
      social_name: 'Admin Company',
      cnpj: '12345678000195',
      phone: '11999999999',
      email: 'admin@gmail.com',
      office: 'ANY',
      image_path: '',
      userId: user.id,
    },
  });
}

SEED_INITIAL_DATA();
