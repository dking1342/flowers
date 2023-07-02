'use client';
import React, { useState } from 'react';
import { Flower } from '@/app/types/flowers';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles/FlowerItemPage.module.sass';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { prefix } from '../../utils/prefix';

type Props = {
  item: Flower;
};

const url = prefix();

const deleteFlower = async (id: string) => {
  try {
    const res = await fetch(`${url.url.API_URL}/admin/list/${id}/api`, {
      method: 'DELETE',
      cache: 'no-store',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
    });
    if (res.ok) {
      return await res.json();
    } else {
      return { error: res.status };
    }
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
};

const FlowerItemPage = ({ item }: Props) => {
  const { _id, bouquetDetails, description, delivery, sizes } = item;
  const router = useRouter();
  const pathname = usePathname();
  const [size, setSize] = useState(0);
  const [sizeImg, setSizeImg] = useState(0);
  const [sizeLen, setSizeLen] = useState(sizes[size].images.length);

  const removeFlower = (e: any) => {
    e.preventDefault();
    if (confirm('are you sure you want to remove this flower?')) {
      let id = _id.toString();
      if (id) {
        deleteFlower(id)
          .then((res) => {
            router.push('/admin/list');
          })
          .catch((e) => {
            const err = e as Error;
            console.log({ error: err.message });
          });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <div className={styles.heroContainer}>
          <Image
            src={sizes[size].images[sizeImg].hero}
            alt={bouquetDetails.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.carouselContainer}>
          <button
            onClick={() =>
              setSizeImg(sizeImg - 1 >= 0 ? sizeImg - 1 : sizeLen - 1)
            }
          >
            <MdNavigateBefore fontSize={30} fill="#777" />
          </button>
          {sizes[size].images.map((image, index) => (
            <button onClick={() => setSizeImg(index)} key={index}>
              <Image
                src={image.thumbnail}
                alt="thumbnail image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </button>
          ))}
          <button
            onClick={() => setSizeImg(sizeImg + 1 < sizeLen ? sizeImg + 1 : 0)}
          >
            <MdNavigateNext fontSize={30} fill="#777" />
          </button>
        </div>
      </div>
      {!pathname.split('/').includes('flowers') && (
        <div className={styles.adminContainer}>
          <p>Modify Flower?</p>
          <Link href={`/admin/edit?id=${pathname.split('/').slice(-1)}`}>
            <AiOutlineEdit fontSize={40} fill="#000" />
          </Link>
          <button onClick={(e) => removeFlower(e)}>
            {' '}
            <AiOutlineDelete fontSize={40} fill="#ff0000" />
          </button>
        </div>
      )}
      <div className={styles.contentContainer}>
        <div className={styles.detailsContainer}>
          <p>{delivery.method}</p>
          <h1>
            {bouquetDetails.name} {bouquetDetails.isBouquet && 'bouquet'}
          </h1>
          <h2>Price: ${sizes[size].price}</h2>
          <h2>Size: {sizes[size].name}</h2>
          <h2>Quantity: {sizes[size].quantity}</h2>
        </div>
        <div className={styles.arrangementContainer}>
          {sizes.map((s, i) => (
            <button
              className={`${sizes[size].name === s.name && styles.active}`}
              key={s._id?.toString()}
              onClick={() => setSize(i)}
            >
              <p>{s.name}</p>
            </button>
          ))}
        </div>
        <div className={styles.flowerDetailsContainer}>
          <div className={styles.descriptionContainer}>
            <h1>
              {bouquetDetails.name} {bouquetDetails.isBouquet && 'bouquet'}
            </h1>
            <p>{description}</p>
            <p>
              <b>Please Note:</b>
              <br></br> The bouquet pictured reflects our original design for
              this product. While we always try to follow the color palette, we
              may replace stems to deliver the freshest bouquet possible, and we
              may sometimes need to use a different vase.
            </p>
          </div>
          <div className={styles.otherDetailsContainer}>
            <div className={styles.generalSpecsContainer}>
              <h1>general details</h1>
              <ul>
                <li>
                  The {sizes[size].name} Bouquet is approximately{' '}
                  {sizes[size].height} inch height x {sizes[size].width} inch
                  width.
                </li>
                <li>Designed by florists, ready to display.</li>
                <li>
                  For long–lasting blooms, replace the water daily. We suggest
                  trimming the stems every couple days.
                </li>
              </ul>
            </div>
            <div className={styles.bloomSpecsContainer}>
              <h1>flower details</h1>
              <h2>bloom</h2>
              <ul>
                {bouquetDetails.bloom.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <h2>color</h2>
              <ul>
                {bouquetDetails.color.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={styles.infoContainer}>
              <h2>Fresh & Safe Delivery</h2>
              <p>
                The health and safety of our customers, florists and growers is
                top priority. During this time, we will not require a signature
                for delivery. All orders will no longer be hand delivered, but
                be left at the front door with no contact and (as always) ready
                to delight.
              </p>
            </div>
            <div className={styles.infoContainer}>
              <h2>Designed To Delight</h2>
              <p>
                We have a simple goal – delight our customers with flowers that
                are high quality, fresh, and beautiful. While we may
                occasionally need to substitute for color or flower variety, we
                promise that the blooms you receive will be fresh and wow you or
                your gift recipient.
              </p>
            </div>
            <div className={styles.infoContainer}>
              <h2>Expertly Crafted</h2>
              <p>
                With over a century of experience, FTD delivers more than
                bouquets. We deliver moments to remember.
              </p>
              <p>ITEM: {_id.toString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerItemPage;
