import { Test } from '@nestjs/testing';

import { BadRequestException } from '@nestjs/common';
import { PostProductService } from './postProduct.service';
import { PostProductRepository } from '../repository/postProduct.repository';
import { PostProductInputDto } from '../dto/postProductInput.dto';

describe('PostProductService', () => {
  let sut: PostProductService;
  let postProductRepository: PostProductRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PostProductService,
        {
          provide: PostProductRepository,
          useValue: {
            findEnterpriseById: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    sut = moduleRef.get<PostProductService>(PostProductService);
    postProductRepository = moduleRef.get<PostProductRepository>(
      PostProductRepository,
    );
  });

  it('Should be defined', () => {
    expect(sut).toBeDefined();
    expect(postProductRepository).toBeDefined();
  });

  describe('Execute', () => {
    it('Shoud be create a new product', async () => {
      // Arrange
      const data: PostProductInputDto = {
        name: 'teste',
        price: 20,
        quantity: 10,
        activity: true,
        enterpriseId: 1,
      };

      const response = await sut.execute(data);

      // Assert
      expect(response).toBeUndefined();
    });

    it('Shoud throw BadRequestException if user already exists', async () => {
      // Arrange
      const data: CreateUserInputDto = {
        email: 'email@test.com',
        name: 'name test',
        password: '1234',
        username: 'username_test',
      };

      jest
        .spyOn(iUserRepository, 'findByUsernameOrEmail')
        .mockResolvedValueOnce({
          ...data,
          id: '233',
          createdAt: new Date('2024-10-14'),
        });

      // Assert
      await expect(sut.execute(data)).rejects.toStrictEqual(
        new BadRequestException('User already exists!'),
      );
    });
  });
});
