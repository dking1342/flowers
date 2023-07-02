import React from 'react';
import { Flower } from '../../types/flowers';
import Link from 'next/link';
import Image from 'next/image';
import { getDeliveryDay, findMinMax } from '../../utils/flowers';
import { usePathname } from 'next/navigation';
import styles from '@/app/styles/FlowerCard.module.sass';
import { isTemplateMiddleOrTemplateTail } from 'typescript';

type Props = {
  item: Flower;
};

const FlowerCard = ({ item }: Props) => {
  const pathname = usePathname();
  const isAdmin = pathname.split('/').includes('admin');
  const id = item._id.toString();
  // const id = Math.ceil(Math.random() * 10000000000).toString();

  return (
    <Link
      key={id}
      href={!isAdmin ? `/flowers/${id}` : `/admin/list/${id}`}
      passHref={true}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        {item.isAvailable && item.isAvailable.isSoldOut ? (
          <div className={styles.isSoldOut}>Sold out</div>
        ) : item.isAvailable && item.isAvailable.isLimited ? (
          <div className={styles.isLimited}>Limited</div>
        ) : item.sale.isSale ? (
          <div className={styles.isSale}>On Sale</div>
        ) : null}

        <Image
          src={item.promoImg}
          alt={item.bouquetDetails.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.h1}>
          {item.bouquetDetails.name}{' '}
          {item.bouquetDetails.isBouquet ? 'bouquet' : 'plant'}
        </h1>
        <h2 className={styles.h2}>{findMinMax(item.sizes)}</h2>
        <p className={styles.p}>
          Delivery by {getDeliveryDay(item.delivery.date)}
        </p>
      </div>
    </Link>
  );
};

export default FlowerCard;
